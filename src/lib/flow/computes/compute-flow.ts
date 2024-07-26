import { type Edge, type Node } from '@xyflow/react';

function computeFlow(nodes: Node[], edges: Edge[]): void {
  console.log('nodes:', nodes);
  console.log('edges:', edges);
}

export { computeFlow };
