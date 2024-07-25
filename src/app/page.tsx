import { ReactFlowProvider } from '@xyflow/react';
import { Flow } from '@/components/flow';
import { ComputeFlow } from '@/components/buttons/compute-flow';
import { PreReleaseBanner } from '@/components/banners/pre-release';

export default function Home(): JSX.Element {
  return (
    <ReactFlowProvider>
      <PreReleaseBanner />
      <Flow />
      <ComputeFlow />
    </ReactFlowProvider>
  );
}
