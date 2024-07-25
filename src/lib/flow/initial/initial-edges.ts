import { MarkerType } from '@xyflow/react';

export const initialEdges = [
  {
    id: '1-2',
    source: '1',
    target: '2',
    deletable: false,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 48,
      height: 48,
    },
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    deletable: false,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 48,
      height: 48,
    },
  },
];
