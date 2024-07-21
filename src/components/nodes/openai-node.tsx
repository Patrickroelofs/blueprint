import {
  Handle,
  type Node,
  Position,
  useHandleConnections,
  useNodesData,
  useReactFlow,
} from '@xyflow/react';
import { useEffect } from 'react';
import { LimitHandle } from '../handles/limit-handle';
import { type TextNode } from './text-node';

interface OpenAINode extends Node<{ apiKey: string }, 'openai'> {
  isConnectable: boolean;
}

function OpenAINode(props: OpenAINode): JSX.Element {
  const { id, data, isConnectable } = props;
  const { updateNodeData } = useReactFlow();

  const connections = useHandleConnections({
    type: 'target',
  });

  const nodesData = useNodesData<TextNode>(
    connections.map((connection) => connection.source),
  );

  useEffect(() => {
    updateNodeData(id, {
      text: nodesData[0]?.data.text,
    });
  }, [id, nodesData, updateNodeData]);

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
              updateNodeData(id, { api_key: e.target.value });
            }}
            value={data.apiKey}
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
