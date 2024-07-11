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

interface ApiDataStore {
  api_key: string;
  setApiKey: (api_key: string) => void;
}

const useApiDataStore = create(
  persist<ApiDataStore>(
    (set, get) => ({
      api_key: "",
      setApiKey: (api_key: string) => set({ api_key }),
    }),
    {
      name: "apiDataStore",
    }
  )
);

export { useDataStore, useApiDataStore };
