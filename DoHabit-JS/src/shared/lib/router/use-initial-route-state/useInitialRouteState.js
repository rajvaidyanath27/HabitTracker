import { useState } from 'react';
import { getInitialRouteState } from '../helpers';
function useInitialRouteState() {
  const [pageState] = useState(() => getInitialRouteState() ?? {});
  return pageState;
}
export { useInitialRouteState };
