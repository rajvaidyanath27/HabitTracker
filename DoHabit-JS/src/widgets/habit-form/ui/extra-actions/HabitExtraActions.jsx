import styles from './HabitExtraActions.module.css';
import { FaEllipsisH } from 'react-icons/fa';
import useHabitExtraActions from '@widgets/habit-form/model/useHabitExtraActions';
import { Button, useDrawerStore } from '@shared/ui';
function HabitExtraActions({
  habitId,
  onSuccess
}) {
  const openDrawer = useDrawerStore(s => s.open);
  const actions = useHabitExtraActions(habitId, onSuccess);
  return <Button className={styles.button} onClick={() => openDrawer({
    title: 'Manage Habit',
    actions
  })}>
			<FaEllipsisH />
		</Button>;
}
export default HabitExtraActions;
