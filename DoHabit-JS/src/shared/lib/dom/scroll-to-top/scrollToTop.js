/**
 * Smoothly scrolls element or window to top.
 */
function scrollToTop(element, options) {
  const target = element ?? window;
  const {
    behavior = 'smooth'
  } = options ?? {};
  target.scrollTo({
    top: 0,
    behavior
  });
}
export { scrollToTop };
