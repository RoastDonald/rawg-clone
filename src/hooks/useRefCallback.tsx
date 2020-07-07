import React, { useCallback, useRef } from 'react';

const useRefCallback = () => {
  const ref = useRef(null);
  const setRef = useCallback((node) => {
    if (ref.current) {
      // Make sure to cleanup any events/references added to the last instance
    }

    if (node) {
    }

    // Save a reference to the node
    ref.current = node;
  }, []);

  return [setRef];
};

export default useRefCallback;
