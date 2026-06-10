import styles from './CardHeader.module.css';
function CardHeader(props) {
  const {
    title,
    description,
    extra
  } = props;
  return <div>
			<div className={styles.top}>
				<h3>{title}</h3>

				{extra && <div className={styles.extra}>
						{extra}
					</div>}
			</div>

			{description && <div className={styles.description}>
					<small>
						{description}
					</small>
				</div>}
		</div>;
}
export default CardHeader;
