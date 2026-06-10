import { FaFont } from 'react-icons/fa';
import { FaMoon, FaSun } from 'react-icons/fa6';
import { useSettingsStore } from '@entities/settings';
function useThemeActions() {
  const settings = useSettingsStore(s => s.settings);
  const settingsDispatch = useSettingsStore(s => s.settingsDispatch);
  const themeActions = [{
    icon: FaFont,
    label: 'Auto',
    indicator: {
      type: !settings.theme ? 'checkmark' : 'none'
    },
    onClick: () => settingsDispatch({
      type: 'updateSettings',
      payload: {
        theme: undefined
      }
    })
  }, {
    icon: FaSun,
    iconProps: {
      color: '#e3bb44'
    },
    label: 'Light',
    indicator: {
      type: settings.theme === 'light' ? 'checkmark' : 'none'
    },
    onClick: () => settingsDispatch({
      type: 'updateSettings',
      payload: {
        theme: 'light'
      }
    })
  }, {
    icon: FaMoon,
    iconProps: {
      color: '#5070b5'
    },
    label: 'Dark',
    indicator: {
      type: settings.theme === 'dark' ? 'checkmark' : 'none'
    },
    onClick: () => settingsDispatch({
      type: 'updateSettings',
      payload: {
        theme: 'dark'
      }
    })
  }];
  return {
    themeActions
  };
}
export default useThemeActions;
