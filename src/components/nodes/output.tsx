"use client";

import useDataStore from "@/lib/stores/dataStore";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import { useState } from "react";

export const OutputNode = ({ data, isConnectable }: any) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const prompt = useDataStore((state) => state.prompt);
  const api_key = useDataStore((state) => state.api_key);
  const image = useDataStore((state) => state.image);
  const setImage = useDataStore((state) => state.setImage);

  const callImage = async (prompt: string) => {
    setLoading(true);
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: prompt, api_key: api_key }),
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
          {image && !loading && (
            <Image alt="" src={image} width={256} height={256} />
          )}
          {!image && !loading && (
            <div className="w-64 h-64 bg-gradient-to-br from-gray-500 to-gray-800 flex justify-center items-center p-4">
              <span className="text-white italic">
                No image has been generated.
              </span>
            </div>
          )}
          {loading && (
            <div className="w-64 h-64 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 background-animate flex justify-center items-center p-4">
              <span className="text-white italic">
                An image is generating...
              </span>
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
          {error && <p className="text-center text-red-400 pb-4">{error}</p>}
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
