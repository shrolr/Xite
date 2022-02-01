import React, {Dispatch} from 'react';
import {
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {StyledText} from '../atoms';
import {IGenre} from '../../modals';
import {GenreCard} from '.';
import config from '../../constants/config';
import {useDispatch, useSelector} from 'react-redux';
import {getGenres} from '../../redux/selector';
import {VideoAction} from '../../redux/actionTypes';

export const FilterModal: React.FC = ({}) => {
  const genres = useSelector(getGenres);
  const dispatch = useDispatch<Dispatch<VideoAction>>();

  const multiSliderValuesChange = (values: number[]) => {
    const [minYear, maxYear] = values;
    dispatch({type: 'FILTER BY YEARS', maxYear, minYear});
  };

  const renderGenreCard: ListRenderItem<IGenre> = ({item}) => {
    return <GenreCard genre={item} />;
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.container}>
        <View style={styles.sliderContainer}>
          <StyledText type="heading" text="Year" />
          <MultiSlider
            values={[config.minYear, config.maxYear]}
            onValuesChange={multiSliderValuesChange}
            min={config.minYear}
            max={config.maxYear}
            enableLabel
            step={1}
          />
        </View>
        <StyledText type="heading" text="Genres" />
        <FlatList
          style={styles.genreListContainer}
          scrollEnabled={false}
          data={genres}
          renderItem={renderGenreCard}
          numColumns={config.numberOfColumns * 2}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '350@mvs',
    backgroundColor: AppTheme.colors.WARMGRAY,
  },
  safeAreaView: {
    backgroundColor: AppTheme.colors.WARMGRAY,
  },
  genreListContainer: {
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: AppTheme.spacing.xl,
  },
});