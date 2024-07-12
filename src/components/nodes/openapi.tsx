"use client";

import { model, quality, size, useApiDataStore } from "@/lib/stores/dataStore";
import { Handle, Position } from "@xyflow/react";

export const OpenAPINode = ({ data, isConnectable }: any) => {
  const apiValue = useApiDataStore((state) => state.api_key);
  const setApiValue = useApiDataStore((state) => state.setApiKey);
  const size = useApiDataStore((state) => state.size);
  const setSize = useApiDataStore((state) => state.setSize);
  const quality = useApiDataStore((state) => state.quality);
  const setQuality = useApiDataStore((state) => state.setQuality);
  const model = useApiDataStore((state) => state.model);
  const setModel = useApiDataStore((state) => state.setModel);

  const handleChangeApiValue = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setApiValue(newValue);
  };

  const handleChangeSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as size;
    setSize(newValue);
  };

  const handleChangeQuality = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as quality;
    setQuality(newValue);
  };

  const handleChangeModel = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value as model;
    setModel(newValue);
  };

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <p className="text-lg bold">OpenAPI</p>
      <Handle
        type="source"
        position={Position.Top}
        id="textInputSource"
        isConnectable={isConnectable}
      />
      <div className="flex flex-col gap-4">
        <textarea
          value={apiValue}
          onChange={handleChangeApiValue}
          className="w-full mt-2 h-32 border-2 border-gray-200 rounded-md p-2"
          placeholder="Enter your openAPI key here..."
        ></textarea>

        <select
          value={size}
          onChange={handleChangeSize}
          className="w-full mt-2 border-2 border-gray-200 rounded-md p-2 after:mr-4"
        >
          <option value="256x256">256x256</option>
          <option value="512x512">512x512</option>
          <option value="1024x1024">1024x1024</option>
          <option value="1792x1024">1792x1024</option>
          <option value="1024x1792">1024x1792</option>
        </select>

        <select
          value={quality}
          onChange={handleChangeQuality}
          className="w-full mt-2 border-2 border-gray-200 rounded-md p-2"
        >
          <option value="standard">Standard</option>
          <option value="hd">HD</option>
        </select>

        <select
          value={model}
          onChange={handleChangeModel}
          className="w-full mt-2 border-2 border-gray-200 rounded-md p-2"
        >
          <option value="dall-e-2">DALL-E 2</option>
          <option value="dall-e-3">DALL-E 3</option>
        </select>
      </div>
    </div>
  );
};
