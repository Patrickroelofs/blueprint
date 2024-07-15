import { useCallback } from 'react';

type UseOnDragOver = (event: React.DragEvent<HTMLDivElement>) => void;

const useOnDragOver = (): UseOnDragOver => {
  return useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);
};

export { useOnDragOver };
