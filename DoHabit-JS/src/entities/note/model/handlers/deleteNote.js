/**
 * Remove a note from the list.
 */
function deleteNote(params) {
  const {
    notes,
    payload: {
      noteId
    }
  } = params;
  return notes.filter(note => note.id !== noteId);
}
export { deleteNote };
