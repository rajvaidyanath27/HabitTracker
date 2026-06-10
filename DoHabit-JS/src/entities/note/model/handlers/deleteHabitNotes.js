/**
 * Removes all notes associated with a specific habit.
 */
function deleteHabitNotes(params) {
  const {
    notes,
    payload: {
      habitId
    }
  } = params;
  return notes.filter(note => note.habitId !== habitId);
}
export { deleteHabitNotes };
