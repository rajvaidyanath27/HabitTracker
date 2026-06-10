import { SectionHeader } from '@shared/ui';
import styles from './HabitTitleInput.module.css';
import clsx from 'clsx';
function HabitTitleInput({
  input,
  isDuplicate,
  onChange
}) {
  return <section>
			<SectionHeader title='Name' extra={isDuplicate ? <div className={styles.errorMessage}>
						Already exists.
					</div> : undefined} />

			<input type='search' // Using 'search' type to kill mobile autofill
    enterKeyHint='enter' name='title' id='title' className={clsx(styles.input, isDuplicate && styles.isDuplicate)} value={input} onChange={e => onChange(e.target.value)} placeholder='Enter habit name...' autoComplete='off' />
		</section>;
}
export default HabitTitleInput;
