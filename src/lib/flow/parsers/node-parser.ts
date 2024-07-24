import { type Edge, type Node } from '@xyflow/react';

const useNodesParser = (nodes: Node[], edges: Edge[]): Node[] => {
  const connectedNodes = new Set(
    edges.flatMap((edge) => [edge.source, edge.target]),
  );
  return nodes.filter((node) => connectedNodes.has(node.id));
};

export { useNodesParser };
