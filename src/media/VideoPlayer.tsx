import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useThemeStore } from '@tisf/rn-providers';
import VideoPlayerLib from 'react-native-video-controls';
import type { VideoProperties } from 'react-native-video';

export const VideoPlayer: React.FC<VideoProperties> = ({
  source,
  poster,
  ...props
}) => {
  const navigation = useNavigation<any>();
  const palette = useThemeStore().palette;

  const onFull = React.useCallback(() => {
    navigation.navigate('VideoScreen', { source, poster });
  }, [navigation, poster, source]);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <VideoPlayerLib
        videoStyle={{
          minHeight: 250,
        }}
        style={{
          // minWidth: '100%',
          // aspectRatio: 1.77,
          height: 250,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: palette.primaryColor,
        }}
        toggleResizeModeOnFullscreen={false}
        disableBack
        onEnterFullscreen={onFull}
        onExitFullscreen={onFull}
        paused
        source={source}
        poster={poster}
        {...props}
      />
    </View>
  );
};
