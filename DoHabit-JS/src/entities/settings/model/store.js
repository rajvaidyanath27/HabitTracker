import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { settingsReducer } from './reducer';
import { STORAGE_KEYS } from '@shared/const';
const customStorage = {
  getItem: key => {
    // Fallback to old 'settings' key if the new one doesn't exist yet
    const raw = localStorage.getItem(key) ?? localStorage.getItem('settings');
    if (!raw) return null;
    try {
      // Check if we are migrating from the old flat-object format
      if (localStorage.getItem('settings')) {
        const data = JSON.parse(raw);
        const migratedData = {
          state: {
            settings: data
          },
          version: 0
        };
        const jsonString = JSON.stringify(migratedData);
        localStorage.removeItem('settings');
        localStorage.setItem(key, jsonString);
        return jsonString;
      }
      return raw;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
  setItem: (key, value) => localStorage.setItem(key, value),
  removeItem: key => localStorage.removeItem(key)
};

/**
 * Settings store providing state and a dispatch function.
 */
export const useSettingsStore = create()(persist(set => ({
  settings: {
    calendarHighlightToday: true,
    calendarShowDayNames: true,
    calendarShowDayNumbers: true
  },
  settingsDispatch: action => set(s => ({
    settings: settingsReducer(s.settings, action)
  }))
}), {
  name: STORAGE_KEYS.SETTINGS,
  storage: createJSONStorage(() => customStorage)
}));
