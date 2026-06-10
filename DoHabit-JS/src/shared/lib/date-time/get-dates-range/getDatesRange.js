import { formatDate } from '@shared/lib/date-time';
/**
 * Generates an array of ISO dates in chronological order.
 * If 'from' is provided, starts the range at this date.
 * If 'to' is provided, ends the range at this date.
 */
function getDatesRange(count, options) {
  const {
    from,
    to
  } = options;
  const result = new Array(count);
  const date = new Date(from ?? to ?? Date.now());

  // Determine step direction: forward if starting 'from', backward if ending 'at'
  const step = from ? 1 : -1;
  for (let i = 0; i < count; i++) {
    // Fill from start if forward, or from end if backward to keep chronological order
    const index = from ? i : count - 1 - i;
    result[index] = formatDate(date);
    date.setDate(date.getDate() + step);
  }
  return result;
}
export { getDatesRange };
