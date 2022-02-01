import React, {Dispatch, useEffect, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import AppTheme from '../../constants/AppTheme';
import {IGenre} from '../../modals';
import {VideoAction} from '../../redux/actionTypes';
import {getSelectedGenres} from '../../redux/selector';

interface IGenreCard {
  genre: IGenre;
}

export const GenreCard: React.FC<IGenreCard> = ({genre}) => {
  const dispatch = useDispatch<Dispatch<VideoAction>>();
  const [isSelected, setisSelected] = useState<boolean>(false);
  const selectedGenres = useSelector(getSelectedGenres);

  useEffect(() => {
    if (selectedGenres.includes(genre.id)) {
      setisSelected(true);
    }
  }, [selectedGenres, genre]);

  const onPress = () => {
    setisSelected(_isSelected => !_isSelected);
    dispatch({type: 'TOGGLE GENRE', genreId: genre.id});
  };
  return (
    <Pressable
      onPress={onPress}
      style={[
        style.container,
        isSelected ? style.cardSelected : style.cardNotSelected,
      ]}>
      <Text>{genre.name}</Text>
    </Pressable>
  );
};

const style = ScaledSheet.create({
  container: {
    backgroundColor: AppTheme.colors.WHITE,
    marginVertical: AppTheme.spacing.s,
    marginHorizontal: AppTheme.spacing.xs,
    padding: AppTheme.spacing.s,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardSelected: {
    shadowColor: AppTheme.colors.AMOUR,
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
  },
  cardNotSelected: {
    shadowColor: AppTheme.colors.PRIMARY,
  },
});
