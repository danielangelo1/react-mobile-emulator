import { useState } from 'react';

export const useDeviceOrientation = () => {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(
    'portrait'
  );

  const toggleOrientation = () => {
    setOrientation(prev => (prev === 'portrait' ? 'landscape' : 'portrait'));
  };

  return { orientation, toggleOrientation };
};
