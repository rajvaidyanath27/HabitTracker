/**
 * Reducer for application settings.
 */
function settingsReducer(settings, {
  type,
  payload
}) {
  switch (type) {
    case 'updateSettings':
      return {
        ...settings,
        ...payload
      };
    default:
      {
        const _exhaustiveCheck = type;
        console.error('Unknown action type.');
        return _exhaustiveCheck;
      }
  }
}
export { settingsReducer };
