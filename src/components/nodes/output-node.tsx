import { type Node, type NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { LimitHandle } from '../handles/limit-handle';

interface OutputNode extends Node<{ image: string }, 'outputNode'> {
  isConnectable: boolean;
}

function OutputNode(props: NodeProps<OutputNode>): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full rounded-b-xl shadow-lg">
      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        Output
      </p>
      <div className="flex flex-col items-center justify-center gap-4 rounded-b-xl border-2 border-gray-200 bg-white p-2">
        <Image
          className="rounded-lg"
          src="https://via.placeholder.com/256"
          alt="Output Node"
          width={256}
          height={256}
        />
      </div>
      <LimitHandle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
        connectioncount={1}
      />
    </div>
  );
}

export { OutputNode };
