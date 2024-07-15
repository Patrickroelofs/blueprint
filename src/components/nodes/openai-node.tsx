import { Handle, Position } from '@xyflow/react';

interface OpenAINode {
  isConnectable: boolean;
}

function OpenAINode(props: OpenAINode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="w-64 h-full shadow-lg rounded-b-xl bg-white">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="border-l-2 border-t-2 border-r-2 p-2 border-gray-200 bg-gray-100 rounded-t-xl font-bold">
        OpenAI
      </p>
      <div className="w-full border-2 border-gray-200 p-2 rounded-b-xl flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="api_key" className="font-medium">
            Api key
          </label>
          <input
            id="api_key"
            type="text"
            className="border-2 p-2 border-gray-200 rounded-lg"
          />
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export { OpenAINode };
