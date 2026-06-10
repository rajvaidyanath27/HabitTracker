/**
 * Resolves completed dates into a Set.
 */
function getCompletedDatesSet(completedDays, ...dates) {
  const result = new Set();
  if (completedDays.length === 0 || dates.length === 0) return result;

  // Prepare targets and find the oldest one to set a deadline
  const oldestTarget = dates.reduce((a, b) => a < b ? a : b);
  const targetSet = new Set(dates);
  for (const entry of completedDays) {
    // All targets found. Stop.
    if (result.size === targetSet.size) break;

    // Current entry is older than oldest target. Stop.
    if (entry.date < oldestTarget) break;
    if (targetSet.has(entry.date)) {
      result.add(entry.date);
    }
  }
  return result;
}
export { getCompletedDatesSet };
