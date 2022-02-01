import React, {useState} from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';
import {IVideo} from '../../modals';
import {getGenreName} from '../../utils';
import {StyledText} from '../atoms';

interface ITeaser {
  video: IVideo;
  Genres: Map<number, string>;
}

export const Teaser: React.FC<ITeaser> = ({video, Genres}) => {
  const [isImageLoading, setisImageLoading] = useState(true);

  const onImageLoadEnd = () => {
    setisImageLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        onLoadEnd={onImageLoadEnd}
        source={{
          uri: video.image_url,
        }}
      />
      {isImageLoading && <ActivityIndicator style={styles.spinner} animating />}
      <View style={styles.infoBar}>
        <StyledText type="title" text={video.title.toString()} />
        <StyledText
          type="body"
          text={video.artist + ' ' + getGenreName(Genres, video.genre_id)}
        />
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: AppTheme.spacing.m,
    flex: 1,
  },
  infoBar: {
    paddingVertical: AppTheme.spacing.xs,
  },
  thumbnail: {
    borderRadius: AppTheme.spacing.xs,
    aspectRatio: AppTheme.sizes.imageAspectRatio,
  },
  spinner: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
