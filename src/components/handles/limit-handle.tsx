import { Handle, type HandleProps, useHandleConnections } from '@xyflow/react';

interface LimitHandle extends HandleProps {
  connectionCount: number;
}

function LimitHandle(props: LimitHandle): JSX.Element {
  const connections = useHandleConnections({
    type: props.type,
  });

  return (
    <Handle
      {...props}
      isConnectable={connections.length < props.connectionCount}
    />
  );
}

export { LimitHandle };
