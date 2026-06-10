import { create } from 'zustand';
export const useNoteFormStore = create()(set => ({
  isOpen: false,
  draftText: '',
  editingNoteId: null,
  openCreate: () => set(() => ({
    isOpen: true,
    editingNoteId: null
  })),
  openEdit: note => set(() => ({
    isOpen: true,
    editingNoteId: note.id,
    draftText: note.text
  })),
  setDraftText: text => set(() => ({
    draftText: text
  })),
  closeForm: clearDraftText => set(s => ({
    isOpen: false,
    draftText: clearDraftText ? '' : s.draftText
  }))
}));
