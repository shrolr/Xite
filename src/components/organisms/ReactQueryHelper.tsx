import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {StyledText} from '../atoms';
import {Button} from '../molecules';
interface IReactQueryHelper {
  isLoading: boolean;
  error: unknown;
  refetch: () => void;
}

const warningIcon = require('../../assets/icons/warning.png');

export const ReactQueryHelper: React.FC<IReactQueryHelper> = ({
  isLoading,
  error,
  children,
  refetch,
}) => {
  const onPressRetry = () => {
    refetch();
  };
  if (error) {
    return (
      <View style={styles.container}>
        <Image source={warningIcon} />
        <StyledText text="Network error" type="heading" />
        <Button text="Try again" onPress={onPressRetry} />
      </View>
    );
  }
  if (isLoading) {
    return <ActivityIndicator style={styles.spinner} animating />;
  }
  return <>{children}</>;
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  icon: {
    flex: 1,
  },
  spinner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
