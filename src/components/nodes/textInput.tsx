"use client";

import useDataStore from "@/lib/stores/dataStore";
import { Handle, Position } from "@xyflow/react";

export const TextInputNode = ({ data, isConnectable }: any) => {
  const prompt = useDataStore((state) => state.prompt);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    useDataStore.setState({ prompt: newValue });
  };

  return (
    <div className="w-64 bg-white shadow-lg p-2">
      <Handle
        type="source"
        position={Position.Top}
        id="textInputSource"
        isConnectable={isConnectable}
      />
      <p className="italic text-sm border-b-2 border-b-gray-200">
        Text prompt:
      </p>
      <textarea
        value={prompt}
        onChange={handleChange}
        className="w-full h-full mt-2"
      ></textarea>
    </div>
  );
};
