import {
  BaseEdge,
  EdgeLabelRenderer,
  type EdgeProps,
  getBezierPath,
} from '@xyflow/react';
import { PiPaintBrushDuotone } from 'react-icons/pi';
import { useDataStore } from '@/lib/flow/data-store';

function TriggerEdge(props: EdgeProps): JSX.Element {
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

  const { setImage } = useDataStore();

  const clickHandler = (): void => {
    setImage('https://via.placeholder.com/256');
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
              clickHandler();
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

export { TriggerEdge };
