import { Handle, type HandleProps, useHandleConnections } from '@xyflow/react';

interface LimitHandle extends HandleProps {
  connectioncount: number;
}

function LimitHandle(props: LimitHandle): JSX.Element {
  const connections = useHandleConnections({
    type: props.type,
  });

  return (
    <Handle
      {...props}
      isConnectable={connections.length < props.connectioncount}
    />
  );
}

export { LimitHandle };
