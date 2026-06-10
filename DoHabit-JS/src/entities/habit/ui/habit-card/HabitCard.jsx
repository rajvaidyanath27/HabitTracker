import styles from './HabitCard.module.css';
import HabitHeader from '../habit-header/HabitHeader';
function HabitCard(props) {
  const {
    habit,
    headerAction,
    colorVariants,
    currentStreak,
    content,
    onClick
  } = props;

  // Dynamic colors as CSS variables
  const style = {
    '--habit-color-base': colorVariants.baseColor,
    '--habit-color-dark': colorVariants.darkenedColor,
    '--habit-color-soft': colorVariants.softenedColor
  };
  return <div style={style} className={styles.habit} onClick={onClick}>
			<HabitHeader habit={habit} action={headerAction} currentStreak={currentStreak} />

			{content && <div className={styles.contentWrapper}>
					{content}
				</div>}
		</div>;
}
export { HabitCard };
