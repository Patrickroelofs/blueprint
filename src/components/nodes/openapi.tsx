"use client";

import useDataStore from "@/lib/stores/dataStore";
import { Handle, Position } from "@xyflow/react";

export const OpenAPINode = ({ data, isConnectable }: any) => {
  const prompt = useDataStore((state) => state.api_key);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    useDataStore.setState({ api_key: newValue });
  };

  return (
    <div className="w-64 bg-white shadow-lg p-2">
      <p className="italic text-sm border-b-2 border-b-gray-200">
        Bring your own openAPI key:
      </p>
      <Handle
        type="source"
        position={Position.Top}
        id="textInputSource"
        isConnectable={isConnectable}
      />
      <textarea
        value={prompt}
        onChange={handleChange}
        className="w-full mt-2"
        placeholder="Enter your openAPI key here..."
      ></textarea>
    </div>
  );
};
