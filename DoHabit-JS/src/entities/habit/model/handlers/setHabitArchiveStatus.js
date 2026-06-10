import updateHabitById from '../../lib/updateHabitById';
/**
 * Set the archived status of a habit and pushes archived items to the end.
 */
function setHabitArchiveStatus(params) {
  const {
    habits,
    payload: {
      habitId,
      isArchived
    }
  } = params;
  const nextHabits = updateHabitById(habits, habitId, habit => ({
    ...habit,
    isArchived
  }));

  // Sort archived habits to the end of the list
  return nextHabits.sort((a, b) => Number(a.isArchived) - Number(b.isArchived));
}
export default setHabitArchiveStatus;
