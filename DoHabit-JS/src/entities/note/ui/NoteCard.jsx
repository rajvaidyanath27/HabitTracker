import styles from './NoteCard.module.css';
import { formatDate } from '@shared/lib/date-time';
import NoteText from './note-text/NoteText';
function NoteCard(props) {
  const {
    note,
    onCardClick,
    onTagClick
  } = props;
  const dateTimeStr = formatDate(new Date(note.createdAt), {
    includeTime: true
  });
  return <div className={styles.note} onClick={onCardClick}>
			<NoteText text={note.text} onTagClick={onTagClick} />

			<div className={styles.description}>
				<div className={styles.date}>
					<small>{dateTimeStr}</small>
				</div>

				{!!note.streak && <small>{'Streak: ' + note.streak}</small>}
			</div>
		</div>;
}
export { NoteCard };
