'use client';

import { Background, Controls, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';
import { useFlowStore } from '@/lib/flow/store';
import { NodeTypes } from '@/lib/flow/node-types';

export function Flow(): JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useFlowStore(
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
        nodeTypes={NodeTypes}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
