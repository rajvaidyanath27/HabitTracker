import { archiveHabit } from '@features/archive-habit';
import { removeHabit } from '@features/remove-habit';
import { FaTrash } from 'react-icons/fa';
import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
function useHabitExtraActions(habitId, onSuccess) {
  const actions = [{
    icon: FaTrash,
    label: 'Delete Habit',
    variant: 'danger',
    onClick: () => removeHabit(habitId, onSuccess)
  }, {
    icon: HiArchiveBoxArrowDown,
    label: 'Archive Habit',
    onClick: () => archiveHabit(habitId, onSuccess)
  }];
  return actions;
}
export default useHabitExtraActions;
