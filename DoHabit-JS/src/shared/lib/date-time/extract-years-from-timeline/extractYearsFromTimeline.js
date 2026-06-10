/**
 * Extracts unique years from timeline items.
 */
function extractYearsFromTimeline(items, options = {}) {
  const {
    order
  } = options;
  const date = new Date();
  const uniqueYears = new Set();
  for (const item of items) {
    date.setTime(item.createdAt);
    uniqueYears.add(date.getFullYear());
  }
  const result = Array.from(uniqueYears);
  if (order) {
    result.sort((a, b) => order === 'desc' ? b - a : a - b);
  }
  return result;
}
export { extractYearsFromTimeline };
