import React from 'react';
import {ActivityIndicator, Text} from 'react-native';

interface IReactQueryHelper {
  isLoading: boolean;
  error: unknown;
}

export const ReactQueryHelper: React.FC<IReactQueryHelper> = ({
  isLoading,
  error,
  children,
}) => {
  if (error) {
    return <Text>ERROR: {error}</Text>;
  }
  if (isLoading) {
    return <ActivityIndicator animating />;
  }
  return <>{children}</>;
};
