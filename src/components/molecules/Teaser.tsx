import React from 'react';
import {Image, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppTheme from '../../constants/AppTheme';
import {IVideo} from '../../modals';
import {StyledText} from '../atoms';

interface ITeaser {
  video: IVideo;
  getGenreName: (id: number) => string | undefined;
}

export const Teaser: React.FC<ITeaser> = ({video, getGenreName}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: video.image_url,
        }}
      />
      <View style={styles.infoBar}>
        <StyledText type="title" text={video.title} />
        <StyledText
          type="body"
          text={video.artist + ' ' + getGenreName(video.genre_id)}
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
});
