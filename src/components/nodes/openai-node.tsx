import { Handle, Position } from '@xyflow/react';

interface OpenAINode {
  isConnectable: boolean;
}

function OpenAINode(props: OpenAINode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full w-64 rounded-b-xl bg-white shadow-lg">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        OpenAI
      </p>
      <div className="flex w-full flex-col gap-4 rounded-b-xl border-2 border-gray-200 p-2">
        <div className="flex flex-col">
          <label htmlFor="api_key" className="font-medium">
            Api key
          </label>
          <input
            id="api_key"
            type="text"
            className="rounded-lg border-2 border-gray-200 p-2"
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
