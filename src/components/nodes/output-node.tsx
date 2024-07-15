import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

interface OutputNode {
  isConnectable: boolean;
}

function OutputNode(props: OutputNode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full rounded-b-xl shadow-lg">
      <Handle
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        Output
      </p>
      <div className="flex items-center justify-center rounded-b-xl border-2 border-gray-200 bg-white p-2">
        <Image
          className="rounded-lg"
          src="https://via.placeholder.com/256"
          alt="Output Node"
          width={256}
          height={256}
        />
      </div>
      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export { OutputNode };
