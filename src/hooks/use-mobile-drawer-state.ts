import { create } from 'zustand';

export type MobileDrawerState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const useMobileDrawerState = create<MobileDrawerState>(set => ({
  open: false,
  setOpen: open => set({ open }),
}));
