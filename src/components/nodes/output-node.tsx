import { Handle, Position } from '@xyflow/react';
import Image from 'next/image';

interface OutputNode {
  isConnectable: boolean;
}

function OutputNode(props: OutputNode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full shadow-lg rounded-b-xl bg-white">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="border-l-2 border-t-2 border-r-2 p-2 border-gray-200 bg-gray-100 rounded-t-xl font-bold">
        Output
      </p>
      <div className="border-2 border-gray-200 p-2 rounded-b-xl flex justify-center items-center">
        <Image
          className="rounded-lg"
          src="https://via.placeholder.com/256"
          alt="Output Node"
          width={256}
          height={256}
        />
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export { OutputNode };
