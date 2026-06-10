import { ROUTES } from './paths';
/**
 * Extracts history state for a specific route.
 */
export const getInitialRouteState = () => {
  const rawState = window.history.state;
  if (!rawState) return;

  // Fallback to native state if router wrapper object is missing
  const pageState = rawState?.usr ?? rawState;
  return pageState;
};

/**
 * Returns the absolute application path for a specific modal route.
 */
export const getModalPath = key => {
  return `/modal/${ROUTES[key]}`;
};

/**
 * Generates a typed route configuration object for navigation.
 */
export const getNavigationTarget = (route, state) => {
  return {
    to: getModalPath(route),
    state
  };
};
