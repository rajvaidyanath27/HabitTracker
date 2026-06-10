/**
 * Generic helper to update a specific habit in the list.
 */
function updateHabitById(habits, habitId, updateFn) {
  return habits.map(habit => habit.id === habitId ? updateFn(habit) : habit);
}
export default updateHabitById;
