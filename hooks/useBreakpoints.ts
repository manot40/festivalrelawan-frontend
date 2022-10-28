import { useState, useEffect, useCallback } from 'react';

export const useBreakpoints = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleResize = useCallback(
    () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      }),
    []
  );

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  return {
    xs: windowSize.width < 640,
    sm: 640 <= windowSize.width,
    md: 768 <= windowSize.width,
    lg: 1024 <= windowSize.width,
    xl: 1280 <= windowSize.width,
    xxl: 1536 <= windowSize.width,
    width: windowSize.width,
    height: windowSize.height,
  };
};
