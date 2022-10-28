import { useCallback, useEffect, useState } from 'react';

export const useHeaderVisible = (offset = 160) => {
  const [visible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollTop } = document.documentElement;
    setVisible(scrollTop > offset);
  }, [offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return visible;
};
