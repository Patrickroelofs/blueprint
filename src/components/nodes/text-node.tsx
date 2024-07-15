import { Handle, Position } from '@xyflow/react';

interface TextNode {
  isConnectable: boolean;
}

function TextNode(props: TextNode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full w-72 rounded-b-xl bg-white shadow-lg">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        Text Prompt
      </p>
      <div className="rounded-b-xl border-2 border-gray-200 p-2">
        <textarea
          className="resize-none p-1 text-sm outline-none"
          rows={6}
          placeholder="Write your text prompt..."
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

export { TextNode };
