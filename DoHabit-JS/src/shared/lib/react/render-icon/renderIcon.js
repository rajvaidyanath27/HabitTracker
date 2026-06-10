import { createElement } from 'react';
/**
 * Renders an icon component.
 */
function renderIcon(icon, props) {
  if (typeof icon === 'function') {
    return createElement(icon, props);
  }
  return icon;
}
export { renderIcon };
