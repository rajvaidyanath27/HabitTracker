/**
 * Removes a habit from the list by its title.
 */
function deleteHabit(params) {
  const {
    habits,
    payload: {
      habitId
    }
  } = params;
  if (habitId === '') {
    throw new Error('A valid habit title must be provided to delete a habit.');
  }
  return habits.filter(habit => habit.id !== habitId);
}
export default deleteHabit;
