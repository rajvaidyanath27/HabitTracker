import { create } from 'zustand';
export const useDialogStore = create(set => ({
  content: null,
  open: content => set({
    content: content
  }),
  close: () => set({
    content: null
  })
}));
