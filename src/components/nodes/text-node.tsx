import { Handle, Position } from '@xyflow/react';

interface TextNode {
  isConnectable: boolean;
}

function TextNode(props: TextNode): JSX.Element {
  const { isConnectable } = props;

  return (
    <div className="h-full shadow-lg rounded-b-xl bg-white">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="border-l-2 border-t-2 border-r-2 p-2 border-gray-200 bg-gray-100 rounded-t-xl font-bold">
        Text Prompt
      </p>
      <div className="border-2 border-gray-200 p-2 rounded-b-xl">
        <textarea
          className="outline-none resize-none p-1 text-sm"
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
