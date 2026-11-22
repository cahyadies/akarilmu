export type NodeLayer = 'root' | 'pillar' | 'major';

export type FieldGroup = 'Saintek' | 'Soshum' | 'Lintas Rumpun';

export type ProdiCluster =
  | 'Kesehatan'
  | 'MIPA & Kebumian'
  | 'Teknik & Rekayasa'
  | 'Komputasi & Data'
  | 'Pertanian & Kelautan'
  | 'Arsitektur & Seni'
  | 'Ekonomi & Bisnis'
  | 'Hukum & Sosial'
  | 'Bahasa & Pendidikan';

export type EdgeStrength = 'primary' | 'supporting';

export type SavedStatus = 'tertarik' | 'sedang-dipelajari' | 'paham';

export interface KnowledgeNode {
  id: string;
  title: string;
  shortLabel: string;
  layer: NodeLayer;
  group: FieldGroup;
  cluster?: ProdiCluster;
  summary: string;
  howItConnects: string;
  topics: string[];
  outcomes: string[];
  smaTip: string;
  searchKeywords: string[];
}

export interface KnowledgeEdge {
  id: string;
  from: string;
  to: string;
  strength: EdgeStrength;
  reason: string;
}

export interface SavedNoteMap {
  [nodeId: string]: SavedStatus;
}
