"use client";

import { useApiDataStore, useDataStore } from "@/lib/stores/dataStore";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import { useState } from "react";

export const OutputNode = ({ data, isConnectable }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prompt = useDataStore((state) => state.prompt);
  const api_key = useApiDataStore((state) => state.api_key);
  const size = useApiDataStore((state) => state.size);
  const quality = useApiDataStore((state) => state.quality);
  const model = useApiDataStore((state) => state.model);
  const image = useDataStore((state) => state.image);
  const setImage = useDataStore((state) => state.setImage);

  const callImage = async (prompt: string) => {
    setLoading(true);
    setError(null);
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        api_key: api_key,
        size: size,
        quality: quality,
        model: model,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoading(false);
      setImage(data.url);
    }

    if (response.status === 400) {
      setError(data.error);
    }
  };

  return (
    <div className="w-full h-full bg-white shadow-lg">
      <div>
        <div className="flex flex-col">
          {image && !loading && !error && (
            <Image alt="" src={image} width={256} height={256} />
          )}
          {!image && !loading && (
            <div className="w-64 h-64 bg-gradient-to-br from-gray-500 to-gray-800 flex justify-center items-center p-4">
              <span className="text-white italic">
                No image has been generated.
              </span>
            </div>
          )}
          {loading && !error && (
            <div className="w-64 h-64 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate flex justify-center items-center p-4">
              <span className="text-white italic">
                An image is generating...
              </span>
            </div>
          )}
          {error && (
            <div className="w-64 h-64 bg-gradient-to-r from-red-400  to-red-600 background-animate flex justify-center items-center p-4">
              <span className="text-white italic text-center">{error}</span>
            </div>
          )}
          <div className="m-2 flex justify-center items-center">
            <button
              onClick={() => callImage(prompt)}
              className="bg-slate-100 hover:bg-slate-200 text-black font-bold py-3 px-6 rounded-full"
            >
              Create Image
            </button>
          </div>
        </div>
      </div>
      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};
