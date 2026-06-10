import styles from './Switch.module.css';
import clsx from 'clsx';
/**
 * Toggle switch component.
 */
function Switch({
  isActive,
  onClick
}) {
  return <div role='button' className={styles.switch} onClick={onClick}>
			<div className={clsx(styles.indicator, isActive && styles.active)} />
		</div>;
}
export { Switch };
