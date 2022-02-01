import {SafeAreaView, FlatList, ListRenderItem} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {AxiosResponse} from 'axios';
import {getAllMusicVideos} from '../network';
import {IGetAllMusicVideosResponse} from '../network/getResponseModels';
import {ReactQueryHelper} from '../components/organisms';
import {Teaser} from '../components/molecules';
import {IVideo} from '../modals';
import {Platform, PlatformIOSStatic} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

// it will only render 1 columns for iPhone and 3 columns for iPad
var numberOfColumns = 1;
if (Platform.OS === 'ios') {
  const platformIOS = Platform as PlatformIOSStatic;
  numberOfColumns = platformIOS.isPad ? 3 : 1;
}

export default function HomeScreen() {
  const {
    data: musicVideos,
    isLoading,
    error,
  } = useQuery<AxiosResponse<IGetAllMusicVideosResponse>>(
    'getAllMusicVideos',
    () => getAllMusicVideos(),
  );
  const renderThumbnail: ListRenderItem<IVideo> = ({item}) => {
    return <Teaser video={item} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ReactQueryHelper isLoading={isLoading} error={error}>
        <FlatList
          numColumns={numberOfColumns}
          data={musicVideos?.data.videos}
          renderItem={renderThumbnail}
          keyExtractor={item => item.id.toString()}
        />
      </ReactQueryHelper>
    </SafeAreaView>
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
