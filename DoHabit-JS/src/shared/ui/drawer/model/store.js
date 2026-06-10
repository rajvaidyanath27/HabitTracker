import { create } from 'zustand';
export const useDrawerStore = create(set => ({
  content: null,
  open: content => set({
    content: content
  }),
  close: () => set({
    content: null
  })
}));
