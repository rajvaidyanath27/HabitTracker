import styles from './Card.module.css';
import CardHeader from './CardHeader';
function Card(props) {
  const {
    title,
    description,
    extra,
    children
  } = props;
  return <div className={styles.card}>
			<CardHeader title={title} description={description} extra={extra} />

			<div className={styles.childrenWrapepr}>
				{children}
			</div>
		</div>;
}
export { Card };
