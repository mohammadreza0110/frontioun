import { create } from "zustand";

export type Store = {
  activeHash: string;
  setActiveHash: (hash: string) => void;
};

export const useStore = create<Store>((set) => ({
  activeHash: "#IntroduceWithHayat",
  setActiveHash: (hash: string) => set({ activeHash: hash }),
}));
