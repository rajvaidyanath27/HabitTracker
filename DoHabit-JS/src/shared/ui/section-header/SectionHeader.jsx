import styles from './SectionHeader.module.css';
import { startCase } from 'es-toolkit';
/**
 * Generic layout component that displays a section title
 * with an optional extra slot on the opposite side.
 */
function SectionHeader(props) {
  const {
    title,
    description,
    titleStyle,
    extra
  } = props;
  return <div className={styles.header}>
			<h4 style={titleStyle} className={styles.title}>
				{startCase(title)}
			</h4>

			{extra && <div className={styles.extraWrapper}>
					{extra}
				</div>}

			{description && <small className={styles.description}>
					{description}
				</small>}
		</div>;
}
export { SectionHeader };
