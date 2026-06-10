import { BarElement, Chart as ChartJS } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getCompletionCountPerDay } from '@entities/habit';
import { WEEKDAYS } from '@shared/const';
import { Card } from '@shared/ui';
import { FaCalendarWeek } from 'react-icons/fa';
ChartJS.register(BarElement);
/**
 * Renders a bar chart showing habit completion frequency for each day of the week.
 */
function WeekdayChart({
  options,
  days,
  color
}) {
  const data = getCompletionCountPerDay(days);

  // Canvas API doesn't support CSS color functions, so resolve them manually here.
  const tempDiv = document.createElement('div');
  tempDiv.style.color = color;
  document.body.append(tempDiv);
  const computedColor = getComputedStyle(tempDiv).color;
  const config = {
    data: {
      labels: [...WEEKDAYS.slice(1), 'Sun'],
      datasets: [{
        label: 'WeekdayChart',
        data: [...data.slice(1), data[0]],
        backgroundColor: computedColor,
        borderRadius: 10,
        borderSkipped: false
      }]
    },
    options
  };
  return <Card title='Completions / Weekday' extra={<FaCalendarWeek style={{
    color
  }} />}>
			<Bar {...config} />
		</Card>;
}
export { WeekdayChart };
