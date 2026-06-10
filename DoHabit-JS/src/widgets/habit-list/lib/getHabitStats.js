import { getStreaks, getTodayProgress, isYesterdayCompleted } from '@entities/habit';

/**
 * Get stats for a specific habit.
 * Returns yesterday status, today progress and current streak.
 */
function getHabitStats(habit) {
  const {
    completedDays
  } = habit;
  const isYdayCompleted = isYesterdayCompleted(completedDays);
  const {
    isCompleted: isTodayCompleted
  } = getTodayProgress(habit);
  const {
    currentStreak
  } = getStreaks(completedDays);
  return {
    isTodayCompleted,
    isYdayCompleted,
    currentStreak
  };
}
export { getHabitStats };
