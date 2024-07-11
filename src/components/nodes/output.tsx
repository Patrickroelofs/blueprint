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
        {loading && !error ? (
          "Loading..."
        ) : (
          <div>
            {image && <Image alt="" src={image} width={256} height={256} />}
            {!image && (
              <button onClick={() => callImage(prompt)}>Create Image</button>
            )}
          </div>
        )}

        {error && <div>{error}</div>}
      </div>
      <Handle
        type="target"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};
