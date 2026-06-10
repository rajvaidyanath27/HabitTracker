/**
 * Edit a specific note.
 */
function editNote(params) {
  const {
    notes,
    payload: {
      noteId,
      newText
    }
  } = params;
  return notes.map(note => {
    if (note.id !== noteId) return note;
    return {
      ...note,
      text: newText
    };
  });
}
export { editNote };
