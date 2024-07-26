'use client';

import { PiPaintBrushDuotone } from 'react-icons/pi';
import { useFlowStore } from '@/lib/flow/flow-store';
import { computeFlow } from '@/lib/flow/computes/compute-flow';

function ComputeFlow(): JSX.Element {
  const { nodes, edges } = useFlowStore((state) => state);

  return (
    <div className="fixed bottom-0 right-0 pb-8 pr-8">
      <button
        onClick={() => {
          computeFlow(nodes, edges);
        }}
        type="button"
        className="flex items-center justify-center gap-2 rounded-full border-2 border-transparent bg-green-300 px-4 py-2 transition-all duration-200 ease-in-out hover:border-2 hover:border-green-500"
      >
        Compute Flow
        <PiPaintBrushDuotone size={18} />
      </button>
    </div>
  );
}

export { ComputeFlow };
