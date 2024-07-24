import { type Node, type NodeProps, Position } from '@xyflow/react';
import Image from 'next/image';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { OpenAI } from 'openai';
import { useState } from 'react';
import { useFlowStore } from '@/lib/flow/store';
import { useNodesParser } from '@/lib/flow/parsers/node-parser';
import { LimitHandle } from '../handles/limit-handle';
import { type OpenAIData } from './openai-node';
import { type TextNodeData } from './text-node';

interface OutputNode extends Node<{ image: string }, 'outputNode'> {
  isConnectable: boolean;
}

function OutputNode(props: NodeProps<OutputNode>): JSX.Element {
  const { isConnectable } = props;
  const { nodes, edges } = useFlowStore((state) => state);

  const [loading, setLoading] = useState<boolean>(false);
  const [image, setImage] = useState<string>('http://via.placeholder.com/256');

  const connectedNodes = useNodesParser(nodes, edges);

  const handleButtonClick = async (): Promise<void> => {
    setLoading(true);
    const textNode = connectedNodes.find((node) => node.type === 'textNode')
      ?.data as TextNodeData;
    const apiNode = connectedNodes.find((node) => node.type === 'openAINode')
      ?.data as OpenAIData;

    const openai = new OpenAI({
      apiKey: apiNode.apiKey,
      dangerouslyAllowBrowser: true,
    });

    const response = await openai.images.generate({
      prompt: textNode.text,
      model: apiNode.model,
      quality: apiNode.quality,
      size: apiNode.size,
      style: apiNode.style,
      response_format: 'url',
    });

    setImage(response.data.find((data) => data.url)?.url ?? image);
    setLoading(false);
  };

  return (
    <div className="h-full rounded-b-xl shadow-lg">
      <p className="rounded-t-xl border-l-2 border-r-2 border-t-2 border-gray-200 bg-gray-100 p-2 font-bold">
        Output
      </p>
      <div className="flex flex-col items-center justify-center gap-4 rounded-b-xl border-2 border-gray-200 bg-white p-2">
        {loading ? (
          <div className="flex h-64 w-64 items-center justify-center bg-gray-200 bg-opacity-90">
            <p className="text-lg font-bold">Loading...</p>
          </div>
        ) : null}

        {!loading && (
          <Image
            className="rounded-lg"
            src={image}
            alt="Output Node"
            width={256}
            height={256}
          />
        )}

        {!loading || image === 'http://via.placeholder.com/256' ? (
          <button
            onClick={() => {
              void handleButtonClick();
            }}
            type="button"
            className="mb-2 flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            Create image
            <PiPaintBrushDuotone size={18} />
          </button>
        ) : null}
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
