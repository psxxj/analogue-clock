import { useEffect, useState } from 'react';

export const useTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let frameId: number;

    const update = () => {
      setTime(new Date());
      frameId = requestAnimationFrame(update);
    };
    frameId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return time;
}