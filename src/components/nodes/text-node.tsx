import {
  Handle,
  type Node,
  type NodeProps,
  Position,
  useReactFlow,
} from '@xyflow/react';

interface TextNode extends Node<{ text: string }, 'textNode'> {
  isConnectable: boolean;
}

function TextNode(props: NodeProps<TextNode>): JSX.Element {
  const { id, data, isConnectable } = props;
  const { updateNodeData } = useReactFlow();

  return (
    <div className="h-full w-72 rounded-b-xl shadow-lg">
      <Handle
        type="source"
        position={Position.Top}
        isConnectable={isConnectable}
      />

      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        Text Prompt
      </p>
      <div className="rounded-b-xl border-2 border-gray-200 bg-white p-2">
        <textarea
          onChange={(evt) => {
            updateNodeData(id, { text: evt.target.value });
          }}
          value={data.text}
          className="resize-none p-1 text-sm outline-none"
          rows={6}
          placeholder="Write your text prompt..."
        />
      </div>
    </div>
  );
}

export { TextNode };
