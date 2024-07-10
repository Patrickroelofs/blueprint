"use client";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
  useUpdateNodeInternals,
} from "@xyflow/react";
import { OutputNode } from "./nodes/output";
import { TextInputNode } from "./nodes/textInput";
import { useCallback, useState } from "react";

const initialNodes = [
  {
    id: "1",
    type: "outputNode",
    position: { x: 0, y: 0 },
    data: {},
  },
  {
    id: "2",
    type: "inputNode",
    position: { x: 500, y: 250 },
    data: {},
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    sourceHandle: "textInputSource",
    target: "2",
    targetHandle: "outputTarget",
  },
];

const nodeTypes = {
  outputNode: OutputNode,
  inputNode: TextInputNode,
};

export const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
