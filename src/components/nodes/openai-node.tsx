import {
  Handle,
  type Node,
  type NodeProps,
  Position,
  useReactFlow,
} from '@xyflow/react';
import { useEffect, useState } from 'react';
import { LimitHandle } from '../handles/limit-handle';

export interface OpenAIData {
  apiKey: string;
  model: 'dall-e-2' | 'dall-e-3';
  quality: 'standard' | 'hd';
  size: '256x256' | '512x512' | '1024x1024' | '1792x1024' | '1024x1792';
  style: 'vivid' | 'natural';
  [key: string]: unknown;
}

interface OpenAINode extends Node<OpenAIData, 'openAINode'> {
  isConnectable: boolean;
}

function OpenAINode(props: NodeProps<OpenAINode>): JSX.Element {
  const { id, isConnectable } = props;

  const [apiKey, setApiKey] = useState<string>('');
  const [model, setModel] = useState<OpenAIData['model']>('dall-e-2');
  const [quality, setQuality] = useState<OpenAIData['quality']>('standard');
  const [size, setSize] = useState<OpenAIData['size']>();
  const [style, setStyle] = useState<OpenAIData['style']>();

  const { updateNodeData } = useReactFlow();

  useEffect(() => {
    updateNodeData(id, {
      apiKey,
      model,
      quality,
      size,
      style,
    });
  }, [apiKey, id, model, quality, size, style, updateNodeData]);

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
          <label htmlFor="apiKey" className="font-medium">
            Api key
          </label>
          <input
            id="apiKey"
            type="text"
            onChange={(e) => {
              setApiKey(e.target.value);
            }}
            value={apiKey}
            className="rounded-lg border-2 border-gray-200 p-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="model" className="font-medium">
            Model
          </label>
          <select
            id="model"
            onChange={(e) => {
              setModel(e.target.value as OpenAIData['model']);

              if (e.target.value === 'dall-e-2') {
                setQuality('standard');
                setSize('256x256');
                setStyle(undefined);
              } else if (e.target.value === 'dall-e-3') {
                setQuality('standard');
                setSize('1024x1024');
                setStyle('natural');
              }
            }}
            value={model}
            className="rounded-lg border-2 border-gray-200 p-2"
          >
            <option value="dall-e-2">DALL-E 2</option>
            <option value="dall-e-3">DALL-E 3</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="quality" className="font-medium">
            Quality
          </label>
          <select
            id="quality"
            onChange={(e) => {
              setQuality(e.target.value as OpenAIData['quality']);
            }}
            value={quality}
            className="rounded-lg border-2 border-gray-200 p-2"
          >
            <option value="standard">Standard</option>
            {model === 'dall-e-3' && <option value="hd">HD</option>}
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="size" className="font-medium">
            Size
          </label>
          <select
            id="size"
            onChange={(e) => {
              setSize(e.target.value as OpenAIData['size']);
            }}
            value={size}
            className="rounded-lg border-2 border-gray-200 p-2"
          >
            {model === 'dall-e-2' && (
              <>
                <option value="256x256">256x256</option>
                <option value="512x512">512x512</option>
                <option value="1024x1024">1024x1024</option>
              </>
            )}

            {model === 'dall-e-3' && (
              <>
                <option value="1024x1024">1024x1024</option>
                <option value="1792x1024">1792x1024</option>
                <option value="1024x1792">1024x1792</option>
              </>
            )}
          </select>
        </div>

        {model === 'dall-e-3' && (
          <div className="flex flex-col">
            <label htmlFor="style" className="font-medium">
              Style
            </label>
            <select
              id="style"
              onChange={(e) => {
                setStyle(e.target.value as OpenAIData['style']);
              }}
              value={style}
              className="rounded-lg border-2 border-gray-200 p-2"
            >
              <option value="vivid">Vidid</option>
              <option value="natural">Natural</option>
            </select>
          </div>
        )}
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
