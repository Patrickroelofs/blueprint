import { ReactFlowProvider } from '@xyflow/react';
import { CreateBar } from '@/components/create-bar';
import { Flow } from '@/components/flow';

export default function Home(): JSX.Element {
  return (
    <>
      <ReactFlowProvider>
        <Flow />
      </ReactFlowProvider>
      <CreateBar />
    </>
  );
}
