import { create } from 'zustand';

type UseWhatsappTrigger = {
  show: boolean;
  setShow: (show: boolean) => void;
};

export const useWhatsappTrigger = create<UseWhatsappTrigger>(set => ({
  show: false,
  setShow: show => set({ show }),
}));
