import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {AxiosResponse} from 'axios';
import {getAllMusicVideos} from '../network';
import {IGetAllMusicVideosResponse} from '../network/getResponseModels';
import {ReactQueryHelper} from '../components/organisms';

export default function HomeScreen() {
  const {
    data: musicVideos,
    isLoading,
    error,
  } = useQuery<AxiosResponse<IGetAllMusicVideosResponse>>(
    'getAllMusicVideos',
    () => getAllMusicVideos(),
  );
  return (
    <SafeAreaView style={styles.container}>
      <ReactQueryHelper isLoading={isLoading} error={error}>
        <Text>{musicVideos?.data.videos.length}</Text>
      </ReactQueryHelper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
