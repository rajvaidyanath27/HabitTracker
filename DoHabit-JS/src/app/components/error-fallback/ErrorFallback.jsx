import { clearLocalStorage } from '@shared/lib/local-storage';
import { Placeholder } from '@shared/ui';

/**
 * Error fallback for the whole app.
 * Provides options to reload or clear data.
 */
function ErrorFallback() {
  const handleReload = () => {
    window.location.href = import.meta.env.BASE_URL;
  };
  const handleReset = () => {
    if (window.confirm('Reset the app and clear all data?')) {
      clearLocalStorage();
      handleReload();
    }
  };
  return <Placeholder content={{
    title: 'Oops! Something went wrong',
    description: 'Try reloading. If it doesn\'t help, reset the app data.'
  }} action={[{
    label: 'Reload App',
    color: 'var(--bg-color-secondary)',
    onClick: handleReload
  }, {
    label: 'Reset',
    color: 'IndianRed',
    onClick: handleReset
  }]} />;
}
export default ErrorFallback;
