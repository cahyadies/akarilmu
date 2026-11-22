import { ProdiCluster } from '../types/knowledge';
import { KNOWLEDGE_EDGES } from './knowledgeEdges';
import { SAINTEK_MAJOR_NODES } from './majorsSaintek';
import { SOSHUM_SENI_MAJOR_NODES } from './majorsSoshumSeni';
import { ROOT_AND_PILLAR_NODES } from './rootsAndPillars';

export const PRODI_CLUSTERS: ProdiCluster[] = [
  'Kesehatan',
  'MIPA & Kebumian',
  'Teknik & Rekayasa',
  'Komputasi & Data',
  'Pertanian & Kelautan',
  'Arsitektur & Seni',
  'Ekonomi & Bisnis',
  'Hukum & Sosial',
  'Bahasa & Pendidikan'
];

export const KNOWLEDGE_NODES = [
  ...ROOT_AND_PILLAR_NODES,
  ...SAINTEK_MAJOR_NODES,
  ...SOSHUM_SENI_MAJOR_NODES
];

export { KNOWLEDGE_EDGES };
