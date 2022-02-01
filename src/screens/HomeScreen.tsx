import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import React, {Dispatch, useEffect, useState} from 'react';
import {useQuery} from 'react-query';
import {AxiosResponse} from 'axios';
import {getAllMusicVideos} from '../network';
import {IGetAllMusicVideosResponse} from '../network/getResponseModels';
import {ReactQueryHelper} from '../components/organisms';
import {FilterModal, SearchBar, Teaser} from '../components/molecules';
import {IVideo} from '../modals';
import {ScaledSheet} from 'react-native-size-matters';
import config from '../constants/config';
import ActionSheet from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {VideoAction} from '../redux/actionTypes';
import {getFilteredVideos} from '../redux/selector/selector';

export default function HomeScreen() {
  const {data, isLoading, error} = useQuery<
    AxiosResponse<IGetAllMusicVideosResponse>
  >('getAllMusicVideos', () => getAllMusicVideos());
  const dispatch = useDispatch<Dispatch<VideoAction>>();
  const musicVideos = useSelector(getFilteredVideos);
  const [mappedGenres, setmappedGenres] = useState<Map<number, string>>(
    new Map(),
  );
  console.log('filtered results length', musicVideos.length);
  useEffect(() => {
    if (data?.data) {
      const {videos, genres} = data.data;
      dispatch({type: 'SET VIDEOS', videos});
      dispatch({type: 'SET GENRES', genres});
    }
    if (data?.data.genres) {
      setmappedGenres(
        new Map(data.data.genres.map(genre => [genre.id, genre.name])),
      );
    }
  }, [data, dispatch]);

  const renderThumbnail: ListRenderItem<IVideo> = ({item}) => {
    return <Teaser Genres={mappedGenres} video={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ReactQueryHelper isLoading={isLoading} error={error}>
        <SearchBar />
        <FlatList
          numColumns={config.numberOfColumns}
          data={musicVideos}
          renderItem={renderThumbnail}
          keyExtractor={item => item.id.toString()}
        />
        <ActionSheet animated id="filter">
          <FilterModal />
        </ActionSheet>
      </ReactQueryHelper>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
