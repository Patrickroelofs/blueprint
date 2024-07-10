import { NextResponse } from "next/server";
import OpenAI from "openai";

const createImage = async (prompt: string, api_key: string) => {
  const openai = new OpenAI({
    apiKey: api_key || "",
  });

  console.log(openai);

  const response = await openai.images.generate({
    prompt: prompt,
    size: "256x256",
    quality: "standard",
    model: "dall-e-2",
    response_format: "url",
  });

  console.log(response);

  return response.data[0].url;
};

export async function POST(request: Request) {
  const { prompt, api_key } = await request.json();

  if (!prompt || !api_key) {
    return NextResponse.json(
      { error: "Prompt, or api_key is required" },
      { status: 400 }
    );
  }

  try {
    const imageUrl = await createImage(prompt, api_key);
    return NextResponse.json({ url: imageUrl });
  } catch (error) {
    return NextResponse.json({ error: "Open API failed" }, { status: 500 });
  }
}
