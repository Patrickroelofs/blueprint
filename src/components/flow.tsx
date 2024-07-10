"use client";

import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import { OutputNode } from "./nodes/output";
import { TextInputNode } from "./nodes/textInput";
import { useCallback, useState } from "react";
import { OpenAPINode } from "./nodes/openapi";

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
    position: { x: 600, y: 250 },
    data: {},
  },
  {
    id: "3",
    type: "openapiNode",
    position: { x: 250, y: 250 },
    data: {},
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "2",
    target: "1",
  },
  {
    id: "e3-1",
    source: "3",
    target: "1",
  },
];

const nodeTypes = {
  outputNode: OutputNode,
  inputNode: TextInputNode,
  openapiNode: OpenAPINode,
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
