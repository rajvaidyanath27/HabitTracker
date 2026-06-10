import { useMemo } from 'react';
import { useDebounce } from '@uidotdev/usehooks';
import { checkHabitTitleExistence } from '@entities/habit';

/**
 * Hook to check if a habit with the same title already exists.
 */
function useHabitDuplicate(habits, currentTitle, isSubmitting, initialHabit) {
  const debouncedTitle = useDebounce(currentTitle, 1000);
  const isDuplicate = useMemo(() => {
    if (isSubmitting) return false;
    return checkHabitTitleExistence(habits, debouncedTitle, initialHabit);
  }, [debouncedTitle, habits, initialHabit, isSubmitting]);
  return isDuplicate;
}
export default useHabitDuplicate;
