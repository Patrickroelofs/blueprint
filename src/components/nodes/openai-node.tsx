import {
  Handle,
  type Node,
  type NodeProps,
  Position,
  useReactFlow,
} from '@xyflow/react';
import { useEffect, useState } from 'react';
import { LimitHandle } from '../handles/limit-handle';

interface OpenAINode extends Node<{ apiKey: string }, 'openAINode'> {
  isConnectable: boolean;
}

function OpenAINode(props: NodeProps<OpenAINode>): JSX.Element {
  const { id, isConnectable } = props;
  const [value, setValue] = useState<string>('');
  const { updateNodeData } = useReactFlow();

  useEffect(() => {
    updateNodeData(id, { apiKey: value });
  }, [value, id, updateNodeData]);

  return (
    <div className="h-full w-64 rounded-b-xl shadow-lg">
      <Handle
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        OpenAI
      </p>
      <div className="flex w-full flex-col gap-4 rounded-b-xl border-2 border-gray-200 bg-white p-2">
        <div className="flex flex-col">
          <label htmlFor="api_key" className="font-medium">
            Api key
          </label>
          <input
            id="api_key"
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="rounded-lg border-2 border-gray-200 p-2"
          />
        </div>
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

export { OpenAINode };
