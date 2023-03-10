import { createContext } from "react";
import { create } from "zustand";

interface DrawerState {
  isOpen: boolean;
  open: any;
  close: any;
}

const DrawerContext = createContext<{
  isOpen: boolean;
  open: () => void;
  close: () => void;
}>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

const useDrawerStore = create<DrawerState>((set, get) => ({
  isOpen: false,
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export { DrawerContext };
export default useDrawerStore;
