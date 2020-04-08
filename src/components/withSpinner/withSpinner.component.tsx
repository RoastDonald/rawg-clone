import React, { ComponentType } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './withSpinner';

interface SpinnerProps {
  loading: boolean;
}

export const withSpinner = <T extends object>(
  Wrapped: ComponentType<T>
): React.FC<T & SpinnerProps> => ({ loading, ...otherProps }: SpinnerProps) => {
  return loading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Wrapped {...(otherProps as T)} />
  );
};
