import { create } from "zustand";

interface State {
  initial: Boolean;
  handleInitial: () => void;
}

export const useActiveStore = create<State>((set) => ({
  initial: false,
  handleInitial: () => set((state) => ({ initial: !state.initial })),
}));
