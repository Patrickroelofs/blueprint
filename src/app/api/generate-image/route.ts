import { model, quality, size } from "@/lib/stores/dataStore";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const createImage = async (
  prompt: string,
  api_key: string,
  size: size,
  quality: quality,
  model: model
) => {
  const openai = new OpenAI({
    apiKey: api_key || "",
  });

  const response = await openai.images.generate({
    prompt: prompt,
    size: size,
    quality: quality,
    model: model,
    response_format: "url",
  });

  console.log(response);

  return response.data[0].url;
};

export async function POST(request: Request) {
  const { prompt, api_key, size, quality, model } = await request.json();

  if (!prompt || !api_key) {
    return NextResponse.json(
      { error: "Prompt and/or api_key is required" },
      { status: 400 }
    );
  }

  try {
    const imageUrl = await createImage(prompt, api_key, size, quality, model);
    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    return NextResponse.json({ error: "Open API failed" }, { status: 500 });
  }
}
