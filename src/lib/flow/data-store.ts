import { create } from 'zustand';

interface DataStore {
  image: string | null;
  setImage: (image: string) => void;
}

const useDataStore = create<DataStore>((set) => ({
  image: null,
  setImage: (image: string) => {
    set({ image });
  },
}));

export { useDataStore };
