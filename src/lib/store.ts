import { create } from "zustand";

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

export default useDataStore;
