import { FaCalendarCheck, FaCalendarTimes, FaPencilAlt, FaShareAlt } from 'react-icons/fa';
import { FaChartSimple } from 'react-icons/fa6';
import { MdLibraryBooks } from 'react-icons/md';
import { useHabitsStore } from '@entities/habit';
import { takeScreenshot } from '@shared/lib/dom';
import { getNavigationTarget } from '@shared/lib/router';
import { useDrawerStore } from '@shared/ui';
/**
 * Hook to manage drawer menu logic.
 */
function useHabitActions() {
  const habitsDispatch = useHabitsStore(s => s.habitsDispatch);
  const openDrawer = useDrawerStore(s => s.open);
  const getActions = params => {
    const {
      habit,
      habitStats: {
        isYdayCompleted,
        isTodayCompleted,
        currentStreak
      },
      colorVariants,
      cardElement
    } = params;
    const {
      darkenedColor
    } = colorVariants;
    return [
    // Done/Undo yestarday
    {
      icon: isYdayCompleted ? FaCalendarTimes : FaCalendarCheck,
      label: (isYdayCompleted ? 'Undo' : 'Done') + ' Y\'day',
      onClick: () => habitsDispatch({
        type: 'toggleYesterdayStatus',
        payload: {
          habitId: habit.id,
          isYdayCompleted,
          isTodayCompleted
        }
      }),
      style: {
        backgroundColor: darkenedColor
      }
    },
    // Open habit editor
    {
      ...getNavigationTarget('HABIT_EDITOR', {
        modalTitle: 'Edit habit',
        habitId: habit.id
      }),
      icon: FaPencilAlt,
      label: 'Edit Habit',
      indicator: {
        type: 'arrow'
      },
      style: {
        backgroundColor: darkenedColor
      }
    },
    // Share habit
    {
      icon: FaShareAlt,
      label: 'Share Habit',
      onClick: () => takeScreenshot(cardElement),
      style: {
        backgroundColor: darkenedColor
      }
    },
    // Open habit statistics
    {
      ...getNavigationTarget('STATISTICS', {
        modalTitle: habit.title,
        habitId: habit.id
      }),
      icon: FaChartSimple,
      label: 'Statistics',
      indicator: {
        type: 'arrow'
      },
      style: {
        backgroundColor: darkenedColor
      }
    },
    // Open habit diary
    {
      ...getNavigationTarget('DIARY', {
        modalTitle: habit.title,
        habitId: habit.id,
        currentStreak
      }),
      icon: MdLibraryBooks,
      label: 'Diary',
      indicator: {
        type: 'arrow'
      },
      style: {
        backgroundColor: darkenedColor
      }
    }];
  };
  return {
    openHabitMenu: ({
      habit,
      ...rest
    }) => {
      openDrawer({
        title: habit.title,
        actions: getActions({
          habit,
          ...rest
        })
      });
    }
  };
}
export { useHabitActions };
