import { create } from "zustand";

interface DataStore {
  prompt: string;
  setPrompt: (prompt: string) => void;
  image: string;
  setImage: (image: string) => void;
  api_key: string;
  setApiKey: (api_key: string) => void;
}

const useDataStore = create<DataStore>((set) => ({
  api_key: "",
  prompt: "A red car, medieval, blue sky, 3pm",
  image: "",
  setPrompt: (prompt: string) => set({ prompt }),
  setImage: (image: string) => set({ image }),
  setApiKey: (api_key: string) => set({ api_key }),
}));

export default useDataStore;
