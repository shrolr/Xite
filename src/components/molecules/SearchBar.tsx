import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';

interface ISearchBar {
  onSearchPress: (text: string) => void;
}

export const SearchBar: React.FC<ISearchBar> = ({onSearchPress}) => {
  const [searchText, setsearchText] = useState('');
  const onSubmitEditing = () => {
    onSearchPress(searchText);
  };
  const onChangeText = (text: string) => {
    setsearchText(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        keyboardType="web-search"
        autoComplete="off"
        placeholder="Search"
        autoCapitalize="none"
        style={styles.input}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: AppTheme.spacing.m,
  },
  input: {
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    borderColor: AppTheme.colors.MIDDLEBLUE,
    height: AppTheme.sizes.minTouchableArea,
    margin: AppTheme.spacing.s,
    padding: AppTheme.spacing.s,
  },
});
