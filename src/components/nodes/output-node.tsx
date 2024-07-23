import {
  getIncomers,
  Handle,
  type Node,
  type NodeProps,
  Position,
  useEdges,
  useNodes,
} from '@xyflow/react';
import Image from 'next/image';
import { LimitHandle } from '../handles/limit-handle';

interface OutputNode extends Node<{ image: string }, 'outputNode'> {
  isConnectable: boolean;
}

function OutputNode(props: NodeProps<OutputNode>): JSX.Element {
  const { isConnectable } = props;
  const nodes = useNodes();
  const edges = useEdges();
  const incoming = getIncomers(props, nodes, edges);

  const findImage = (): string => {
    for (const item of incoming) {
      if (item.data.image) {
        return item.data.image as string;
      }
    }

    // TODO: Return failed state
    return 'https://via.placeholder.com/256';
  };

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
          src={findImage()}
          alt="Output Node"
          width={256}
          height={256}
        />
      </div>
      <LimitHandle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
        connectioncount={1}
      />
    </div>
  );
}

export { OutputNode };
