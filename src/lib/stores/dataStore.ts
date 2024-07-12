import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface DataStore {
  prompt: string;
  setPrompt: (prompt: string) => void;
  image: string;
  setImage: (image: string) => void;
}

const useDataStore = create<DataStore>((set) => ({
  prompt: "A red car, medieval, blue sky, 3pm",
  image: "",
  setPrompt: (prompt: string) => set({ prompt }),
  setImage: (image: string) => set({ image }),
}));

export type size =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792";
export type quality = "standard" | "hd";
export type model = "dall-e-2" | "dall-e-3";

interface ApiDataStore {
  api_key: string;
  setApiKey: (api_key: string) => void;
  size: size;
  setSize: (size: size) => void;
  quality: quality;
  setQuality: (quality: quality) => void;
  model: model;
  setModel: (model: model) => void;
}

const useApiDataStore = create(
  persist<ApiDataStore>(
    (set, get) => ({
      api_key: "",
      setApiKey: (api_key: string) => set({ api_key }),
      size: "256x256",
      setSize: (size: size) => set({ size }),
      quality: "standard",
      setQuality: (quality: quality) => set({ quality }),
      model: "dall-e-2",
      setModel: (model: model) => set({ model }),
    }),
    {
      name: "apiDataStore",
    }
  )
);

export { useDataStore, useApiDataStore };
