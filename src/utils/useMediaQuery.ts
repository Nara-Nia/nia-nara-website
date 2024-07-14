import { useEffect, useState } from "react";

export function useMediaQuery(media: number) {
  const [resolution, setResolution] = useState(window.innerWidth <= media);

  useEffect(() => {
    function handleResize() {
      setResolution(window.innerWidth <= media);
    }

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [media])

  return resolution;
}