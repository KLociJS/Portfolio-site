import { useCallback, useEffect, useRef, useState } from "react";

export default function useIntersectionObserver() {
  const [visibleElements, setVisibleElements] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    if (!observer.current) {
      observer.current = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter(
            (entry) => entry.isIntersecting
          );
          setVisibleElements((prev) => [
            ...prev,
            ...visibleEntries.filter(
              (e) => !prev.find((p) => p.target.id === e.target.id)
            ),
          ]);
        },
        {
          threshold: 0.1,
        }
      );
    }
  }, [visibleElements]);

  const observe = useCallback((element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  }, []);

  const unobserve = useCallback(
    (element) => {
      if (observer.current) {
        observer.current.unobserve(element);
      }
    },
    [observer]
  );

  return [visibleElements, observe, unobserve];
}
