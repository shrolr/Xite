import React from 'react';
import {Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';

interface IStyledText {
  text: string;
  type: 'title' | 'body' | 'heading';
}

export const StyledText: React.FC<IStyledText> = ({text, type}) => (
  <Text style={textStyleTitle[type]}>{text}</Text>
);

const textStyleTitle = ScaledSheet.create({
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: AppTheme.colors.PRIMARY,
    ...AppTheme.textVariants.title,
  },
  body: {
    textAlign: 'center',
    color: AppTheme.colors.SECONDARY,
    ...AppTheme.textVariants.body,
  },
  heading: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginHorizontal: AppTheme.spacing.m,
    color: AppTheme.colors.PRIMARY,
    ...AppTheme.textVariants.heading,
  },
});
