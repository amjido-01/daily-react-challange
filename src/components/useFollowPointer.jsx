import { useState, useEffect } from "react";

export function useFollowPointer(ref) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const boundingRect = element.getBoundingClientRect();

      const x = Math.max(
        0,
        Math.min(
          clientX - boundingRect.left - element.offsetWidth / 2,
          boundingRect.width - element.offsetWidth
        )
      );
      const y = Math.max(
        0,
        Math.min(
          clientY - boundingRect.top - element.offsetHeight / 2,
          boundingRect.height - element.offsetHeight
        )
      );

      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [ref]);

  return point;
}
