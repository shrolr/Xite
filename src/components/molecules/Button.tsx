import React from 'react';
import {Pressable, Text} from 'react-native';
import AppTheme from '../../constants/AppTheme';
import {ScaledSheet} from 'react-native-size-matters';

interface IButton {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<IButton> = ({text, onPress}) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{text}</Text>
  </Pressable>
);

const styles = ScaledSheet.create({
  button: {
    marginVertical: AppTheme.spacing.xs,
    paddingHorizontal: AppTheme.spacing.s,
    paddingVertical: AppTheme.spacing.xs,
    borderRadius: AppTheme.spacing.s,
    alignSelf: 'center',
    backgroundColor: AppTheme.colors.AMOUR,
  },
  text: {
    fontWeight: 'bold',
    color: AppTheme.colors.WHITE,
    textAlign: 'center',
    ...AppTheme.textVariants.heading,
  },
});
