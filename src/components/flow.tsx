'use client';

import { Background, Controls, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';
import { useFlowStore } from '@/lib/flow/store';
import { NodeTypes } from '@/lib/flow/node-types';
import { useOnDrop } from '@/lib/flow/hooks/on-drop';
import { useOnDragOver } from '@/lib/flow/hooks/on-drag-over';

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

  const onDrop = useOnDrop();
  const onDragOver = useOnDragOver();

  return (
    <div className="h-screen w-screen">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={NodeTypes}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
