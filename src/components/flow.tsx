'use client';

import { Background, Controls, ReactFlow } from '@xyflow/react';
import { useShallow } from 'zustand/react/shallow';
import { useCallback } from 'react';
import { useFlowStore } from '@/lib/flow/store';
import { NodeTypes } from '@/lib/flow/node-types';

export function Flow(): JSX.Element {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect, setNodes } =
    useFlowStore(
      useShallow((state) => ({
        nodes: state.nodes,
        edges: state.edges,
        onNodesChange: state.onNodesChange,
        onEdgesChange: state.onEdgesChange,
        onConnect: state.onConnect,
        setNodes: state.setNodes,
      })),
    );

  const onDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const type = event.dataTransfer.getData('application/reactflow');

    if (typeof type === 'undefined' || !type) {
      return;
    }

    const position = { x: event.clientX, y: event.clientY };

    const newNode = {
      id: Math.random().toString(),
      type,
      position,
      data: { label: `${type} node` },
    };

    setNodes([...nodes, newNode]);
  }, []);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

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
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
