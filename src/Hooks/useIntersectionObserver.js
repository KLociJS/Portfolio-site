import { useCallback, useEffect, useRef, useState } from "react";

export default function useIntersectionObserver() {
  const [visibleElement, setVisibleElement] = useState([]);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        setVisibleElement(visibleEntry || null);
      },
      { threshold: 0.1 }
    );
    console.log("observer created");

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const observe = (element) => {
    if (observer.current) {
      observer.current.observe(element);
    }
  };

  const unobserve = useCallback(
    (element) => {
      if (observer.current) {
        observer.current.unobserve(element);
      }
    },
    [observer]
  );

  return [visibleElement, observe, unobserve];
}
