import styles from './TotalCompletedMetric.module.css';
import { FaHashtag } from 'react-icons/fa';
import { Card } from '@shared/ui';
/**
 * Displays the total number of completions for a habit over a selected period.
 */
function TotalCompletedMetric({
  days,
  color
}) {
  return <Card title='Total Completed' extra={<FaHashtag style={{
    color
  }} />}>
			<div className={styles.content}>
				{days.length}
			</div>
		</Card>;
}
export { TotalCompletedMetric };
