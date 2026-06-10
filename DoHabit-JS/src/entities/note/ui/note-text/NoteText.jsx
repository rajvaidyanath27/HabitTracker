import styles from './NoteText.module.css';
import Linkify from 'linkify-react';
import 'linkify-plugin-hashtag';
function NoteText(props) {
  const {
    text,
    onTagClick
  } = props;
  const handleTagClick = (e, tag) => {
    e.preventDefault();
    e.stopPropagation();
    if (tag) onTagClick(tag);
  };
  return <div className={styles.note}>
			<Linkify options={{
      render: ({
        content
      }) => <button className={styles.tag} onClick={e => handleTagClick(e, content)}>
							{content}
						</button>
    }}>
				{text}
			</Linkify>
		</div>;
}
export default NoteText;
