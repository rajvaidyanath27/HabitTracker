import { useEffect, useRef } from 'react';
function useIntersectionObserver({
  onIntersect,
  enabled,
  options
}) {
  const targetRef = useRef(null);
  useEffect(() => {
    if (!targetRef.current || !enabled) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    }, options);
    observer.observe(targetRef.current);
    return () => observer.disconnect();
  }, [enabled, onIntersect, options]);
  return targetRef;
}
export { useIntersectionObserver };
