"use client";

import {
  Background,
  Controls,
  ReactFlow,
} from "@xyflow/react";
import { OutputNode } from "./nodes/output";
import { TextInputNode } from "./nodes/textInput";
import { OpenAPINode } from "./nodes/openapi";
import useFlowStore from "@/lib/stores/flowStore";
import { useShallow } from "zustand/react/shallow";

const nodeTypes = {
  outputNode: OutputNode,
  inputNode: TextInputNode,
  openapiNode: OpenAPINode,
};

export const Flow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowStore(
    useShallow((state) => ({
      nodes: state.nodes,
      edges: state.edges,
      onNodesChange: state.onNodesChange,
      onEdgesChange: state.onEdgesChange,
      onConnect: state.onConnect,
    })),
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
