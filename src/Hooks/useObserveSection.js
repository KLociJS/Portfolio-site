import { useEffect, useRef } from "react";
import { useObserverContext } from "./useObserverContext";

export default function useObserveSection() {
  const ref = useRef(null);

  const { visibleElements, observe, unobserve } = useObserverContext();

  useEffect(() => {
    //clarify

    setTimeout(() => {
      observe(ref.current);
    }, 100);

    const element = ref.current;

    return () => {
      unobserve(element);
    };
  }, [observe, unobserve]);

  return [ref, visibleElements];
}
