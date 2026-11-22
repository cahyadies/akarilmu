import { EdgeStrength, KnowledgeEdge, KnowledgeNode } from '../types/knowledge';

export interface RootContribution {
  rootId: string;
  strength: EdgeStrength;
  viaPillars: string[];
}

export interface ChainResult {
  nodeIds: Set<string>;
  edgeIds: Set<string>;
  upstreamIds: Set<string>;
  downstreamIds: Set<string>;
}

export function getNodeById(nodes: KnowledgeNode[], id: string): KnowledgeNode | undefined {
  return nodes.find((node) => node.id === id);
}

export function getDirectUpstream(
  nodeId: string,
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[]
): Array<{ node: KnowledgeNode; edge: KnowledgeEdge }> {
  const result: Array<{ node: KnowledgeNode; edge: KnowledgeEdge }> = [];
  for (const edge of edges) {
    if (edge.to === nodeId) {
      const source = getNodeById(nodes, edge.from);
      if (source) {
        result.push({ node: source, edge });
      }
    }
  }
  return result.sort((a, b) => (a.edge.strength === 'primary' && b.edge.strength !== 'primary' ? -1 : 1));
}

export function getDirectDownstream(
  nodeId: string,
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[]
): Array<{ node: KnowledgeNode; edge: KnowledgeEdge }> {
  const result: Array<{ node: KnowledgeNode; edge: KnowledgeEdge }> = [];
  for (const edge of edges) {
    if (edge.from === nodeId) {
      const target = getNodeById(nodes, edge.to);
      if (target) {
        result.push({ node: target, edge });
      }
    }
  }
  return result.sort((a, b) => (a.edge.strength === 'primary' && b.edge.strength !== 'primary' ? -1 : 1));
}

// Walks both ancestors and descendants so selecting any layer lights up its full pathway.
export function getConnectedChain(nodeId: string, edges: KnowledgeEdge[]): ChainResult {
  const nodeIds = new Set<string>([nodeId]);
  const edgeIds = new Set<string>();
  const upstreamIds = new Set<string>();
  const downstreamIds = new Set<string>();

  const upQueue = [nodeId];
  while (upQueue.length > 0) {
    const current = upQueue.shift()!;
    for (const edge of edges) {
      if (edge.to === current) {
        edgeIds.add(edge.id);
        if (!upstreamIds.has(edge.from)) {
          upstreamIds.add(edge.from);
          nodeIds.add(edge.from);
          upQueue.push(edge.from);
        }
      }
    }
  }

  const downQueue = [nodeId];
  while (downQueue.length > 0) {
    const current = downQueue.shift()!;
    for (const edge of edges) {
      if (edge.from === current) {
        edgeIds.add(edge.id);
        if (!downstreamIds.has(edge.to)) {
          downstreamIds.add(edge.to);
          nodeIds.add(edge.to);
          downQueue.push(edge.to);
        }
      }
    }
  }

  return { nodeIds, edgeIds, upstreamIds, downstreamIds };
}

export function getMajorRootContributions(
  majorId: string,
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[]
): RootContribution[] {
  const pillarEdges = edges.filter((e) => e.to === majorId);
  const byRoot = new Map<string, RootContribution>();

  for (const pEdge of pillarEdges) {
    const pillar = getNodeById(nodes, pEdge.from);
    if (!pillar) continue;

    const rootEdges = edges.filter((e) => e.to === pillar.id);
    for (const rEdge of rootEdges) {
      const effectiveStrength: EdgeStrength =
        pEdge.strength === 'primary' && rEdge.strength === 'primary' ? 'primary' : 'supporting';

      const existing = byRoot.get(rEdge.from);
      if (!existing) {
        byRoot.set(rEdge.from, {
          rootId: rEdge.from,
          strength: effectiveStrength,
          viaPillars: [pillar.shortLabel]
        });
      } else {
        if (effectiveStrength === 'primary') {
          existing.strength = 'primary';
        }
        if (!existing.viaPillars.includes(pillar.shortLabel)) {
          existing.viaPillars.push(pillar.shortLabel);
        }
      }
    }
  }

  return Array.from(byRoot.values()).sort((a, b) => {
    if (a.strength !== b.strength) {
      return a.strength === 'primary' ? -1 : 1;
    }
    return a.rootId.localeCompare(b.rootId);
  });
}

export interface ComboMatch {
  major: KnowledgeNode;
  matchedRoots: RootContribution[];
  allRoots: RootContribution[];
  primaryHits: number;
}

export function findMajorsByRootCombo(
  selectedRootIds: string[],
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[]
): { exactMatches: ComboMatch[]; partialMatches: ComboMatch[] } {
  if (selectedRootIds.length === 0) {
    return { exactMatches: [], partialMatches: [] };
  }

  const majors = nodes.filter((n) => n.layer === 'major');
  const exactMatches: ComboMatch[] = [];
  const partialMatches: ComboMatch[] = [];

  for (const major of majors) {
    const allRoots = getMajorRootContributions(major.id, nodes, edges);
    const matchedRoots = allRoots.filter((rc) => selectedRootIds.includes(rc.rootId));

    if (matchedRoots.length === 0) continue;

    const primaryHits = matchedRoots.filter((rc) => rc.strength === 'primary').length;
    const entry: ComboMatch = { major, matchedRoots, allRoots, primaryHits };

    if (matchedRoots.length === selectedRootIds.length) {
      exactMatches.push(entry);
    } else if (selectedRootIds.length > 1) {
      partialMatches.push(entry);
    }
  }

  const sortMatches = (a: ComboMatch, b: ComboMatch) => {
    if (b.primaryHits !== a.primaryHits) return b.primaryHits - a.primaryHits;
    if (b.matchedRoots.length !== a.matchedRoots.length) {
      return b.matchedRoots.length - a.matchedRoots.length;
    }
    return a.major.title.localeCompare(b.major.title);
  };

  exactMatches.sort(sortMatches);
  partialMatches.sort(sortMatches);

  return { exactMatches, partialMatches };
}

export function filterNodesBySearch(
  query: string,
  nodes: KnowledgeNode[],
  edges: KnowledgeEdge[]
): Set<string> {
  const cleaned = query.trim().toLowerCase();
  if (!cleaned) {
    return new Set(nodes.map((n) => n.id));
  }

  const directHits = nodes.filter((node) => {
    const haystack = [
      node.title,
      node.shortLabel,
      node.summary,
      node.group,
      node.cluster ?? '',
      ...node.topics,
      ...node.outcomes,
      ...node.searchKeywords
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(cleaned);
  });

  const visibleIds = new Set<string>();
  for (const hit of directHits) {
    const chain = getConnectedChain(hit.id, edges);
    chain.nodeIds.forEach((id) => visibleIds.add(id));
  }
  return visibleIds;
}
