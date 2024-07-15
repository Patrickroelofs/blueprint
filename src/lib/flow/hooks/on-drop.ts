import { useReactFlow } from '@xyflow/react';
import { useCallback } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useFlowStore } from '../store';

type UseOnDrop = (event: React.DragEvent<HTMLDivElement>) => void;

const useOnDrop = (): UseOnDrop => {
  const reactFlowInstance = useReactFlow();
  const { nodes, setNodes } = useFlowStore(
    useShallow((state) => ({
      nodes: state.nodes,
      setNodes: state.setNodes,
    })),
  );

  return useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: crypto.randomUUID(),
        type,
        position,
        data: {},
      };

      setNodes([...nodes, newNode]);
    },
    [nodes, reactFlowInstance, setNodes],
  );
};

export { useOnDrop };
