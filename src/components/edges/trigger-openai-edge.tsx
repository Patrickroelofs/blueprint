import {
  BaseEdge,
  EdgeLabelRenderer,
  type EdgeProps,
  getBezierPath,
  useReactFlow,
} from '@xyflow/react';
import OpenAI from 'openai';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { useFlowStore } from '@/lib/flow/store';

function TriggerOpenAIEdge(props: EdgeProps): JSX.Element {
  const nodes = useFlowStore((state) => state.nodes);
  // TODO: Ensure this is not "as string"
  const apiKey = nodes.find((node) => node.type === 'openAINode')?.data
    .apiKey as string;
  const prompt = nodes.find((node) => node.type === 'textNode')?.data
    .text as string;

  const { updateNodeData } = useReactFlow();

  const {
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    style,
    markerEnd,
  } = props;

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const handleButtonClick = async (): Promise<void> => {
    if (!apiKey) {
      // TODO: Handle no apiKey
      return;
    }

    const openai = new OpenAI({
      apiKey,
      // TODO: Move api handling to server
      dangerouslyAllowBrowser: true,
    });

    // TODO: Add to node data; model, quality, size, response_format
    const response = await openai.images.generate({
      prompt,
      model: 'dall-e-2',
      quality: 'standard',
      size: '256x256',
      response_format: 'url',
    });

    // TODO: Handle response
    updateNodeData(props.source, { image: response.data[0]?.url });
  };

  return (
    <>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={style} />
      <EdgeLabelRenderer>
        <div
          style={{
            transform: `translate(-50%, -50%) translate(${labelX.toString()}px,${labelY.toString()}px)`,
          }}
          className="pointer-events-auto absolute"
        >
          <button
            onClick={() => {
              void handleButtonClick();
            }}
            type="button"
            className="flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 bg-white px-4 py-2 font-bold transition-all duration-300 ease-in-out hover:bg-gray-100"
          >
            Create image
            <PiPaintBrushDuotone size={18} />
          </button>
        </div>
      </EdgeLabelRenderer>
    </>
  );
}

export { TriggerOpenAIEdge };
