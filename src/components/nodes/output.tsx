"use client";

import useDataStore from "@/lib/store";
import { Handle, Position } from "@xyflow/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { useState } from "react";

export const OutputNode = ({ data, isConnectable }: any) => {
  const [loading, setLoading] = useState(false);
  const prompt = useDataStore((state) => state.prompt);
  const image = useDataStore((state) => state.image);
  const setImage = useDataStore((state) => state.setImage);

  const callImage = async (prompt: string) => {
    setLoading(true);
    const response = await fetch("/api/generate-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();

    if (response.ok) {
      setLoading(false);
      setImage(data.url);
    }
  };

  return (
    <div className="w-full h-full bg-white shadow-lg">
      <div>
        {loading ? (
          "Loading..."
        ) : (
          <div>
            {image && <Image alt="" src={image} width={128} height={128} />}
            {!image && (
              <Button onClick={() => callImage(prompt)}>Create Image</Button>
            )}
          </div>
        )}
      </div>
      <Handle
        type="target"
        position={Position.Bottom}
        id="outputTarget"
        isConnectable={isConnectable}
      />
    </div>
  );
};
