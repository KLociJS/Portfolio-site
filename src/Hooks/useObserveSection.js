import { useEffect, useRef } from "react";
import { useObserverContext } from "./useObserverContext";

export default function useObserveSection() {
  const ref = useRef(null);

  const { visibleElements, observe, unobserve } = useObserverContext();

  useEffect(() => {
    //clarify
    const element = ref.current;
    observe(ref.current);

    return () => {
      unobserve(element);
    };
  }, [observe, unobserve]);

  return [ref, visibleElements];
}
