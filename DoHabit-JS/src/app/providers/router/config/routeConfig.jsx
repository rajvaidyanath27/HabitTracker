import { Navigate } from 'react-router';
import { AppearancePage } from '@pages/appearance';
import { ArchivePage } from '@pages/archive';
import { DiaryPage } from '@pages/diary';
import { HabitEditorPage } from '@pages/habit-editor';
import { MainPage } from '@pages/main';
import { MenuPage } from '@pages/menu';
import { HabitStatisticsPage } from '@pages/habit-statistics';
import { ROUTES } from '@shared/lib/router';
import { ModalLayout } from '@shared/ui';

/**
 * Individual route definitions for modal sub-pages.
 */
export const modalChildRoutes = {
  APPEARANCE: {
    path: ROUTES.APPEARANCE,
    element: <AppearancePage />
  },
  ARCHIVE: {
    path: ROUTES.ARCHIVE,
    element: <ArchivePage />
  },
  DIARY: {
    path: ROUTES.DIARY,
    element: <DiaryPage />
  },
  HABIT_EDITOR: {
    path: ROUTES.HABIT_EDITOR,
    element: <HabitEditorPage />
  },
  MENU: {
    path: ROUTES.MENU,
    element: <MenuPage />
  },
  STATISTICS: {
    path: ROUTES.STATISTICS,
    element: <HabitStatisticsPage />
  }
};

/**
 * Global route configuration.
 *
 * Note: Most functional pages are rendered as sub-routes
 * inside ModalLayout via React Router Outlet.
 *
 * @see {@link ROUTES}
 */
export const routeConfig = [{
  path: '/',
  element: <MainPage />
}, {
  path: '/modal',
  element: <ModalLayout />,
  children: Object.values(modalChildRoutes)
}, {
  /* Fallback for undefined routes */
  path: '*',
  element: <Navigate to='/' />
}];
