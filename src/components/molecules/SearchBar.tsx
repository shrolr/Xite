import React, {Dispatch} from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';
import {SheetManager} from 'react-native-actions-sheet';
import {useDispatch} from 'react-redux';
import {VideoAction} from '../../redux/actionTypes';

const filterIcon = require('../../assets/icons/filter.png');

export const SearchBar: React.FC = ({}) => {
  const dispatch = useDispatch<Dispatch<VideoAction>>();
  const onShowFilterPressed = () => {
    SheetManager.show('filter');
  };
  const onChangeText = (text: string) => {
    dispatch({type: 'SEARCH BY TEXT', text});
  };

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onChangeText={onChangeText}
          keyboardType="web-search"
          autoComplete="off"
          autoCorrect={false}
          placeholder="Search"
          autoCapitalize="none"
          style={styles.input}
        />
        <Pressable
          onPress={onShowFilterPressed}
          style={styles.filterIconContainer}>
          <Image
            resizeMode="contain"
            style={styles.filterIcon}
            source={filterIcon}
          />
        </Pressable>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
  },
  divider: {
    marginHorizontal: AppTheme.spacing.m,
    marginBottom: AppTheme.spacing.m,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: AppTheme.colors.LIGHT_GRAY,
  },
  filterIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: AppTheme.sizes.minTouchableArea,
    width: AppTheme.sizes.minTouchableArea,
  },
  filterIcon: {
    height: AppTheme.sizes.iconSize,
    width: AppTheme.sizes.iconSize,
  },
  input: {
    flex: 1,
    paddingHorizontal: AppTheme.spacing.m,
    height: AppTheme.sizes.minTouchableArea,
  },
});
