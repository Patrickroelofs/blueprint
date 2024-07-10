import { NextResponse } from "next/server";
import OpenAI from "openai";

const createImage = async (prompt: string) => {
  const openai = new OpenAI({
    apiKey: process.env.OPEN_API_KEY || "",
    organization: process.env.OPEN_API_ORG || "",
  });

  const response = await openai.images.generate({
    prompt: prompt,
    size: "256x256",
    quality: "standard",
    model: "dall-e-2",
    response_format: "url",
  });

  return response.data[0].url;
};

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!prompt) {
    return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
  }

  try {
    const imageUrl = await createImage(prompt);
    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    return NextResponse.json({ error: "Open API failed" }, { status: 500 });
  }
}
