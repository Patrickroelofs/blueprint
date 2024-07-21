import { ReactFlowProvider } from '@xyflow/react';
import { Flow } from '@/components/flow';

export default function Home(): JSX.Element {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  );
}
