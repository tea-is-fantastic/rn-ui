import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import type { CompositeScreenProps } from '@react-navigation/core';
import { windowWidth, windowHeight } from '@tisf/rn-providers';
import VideoPlayerLib from 'react-native-video-controls';

const VideoScreen: React.FC<CompositeScreenProps<any, any>> = ({
  route,
  navigation,
}) => {
  const { source, poster } = route.params || {};
  const [width, setWidth] = React.useState(windowWidth);
  const [height, setHeight] = React.useState(windowHeight);
  const _onLayout: ViewProps['onLayout'] = (event) => {
    const lay = event.nativeEvent.layout;
    if (lay && typeof lay.width === 'number') {
      setWidth(lay.width);
    }
    if (lay && typeof lay.height === 'number') {
      setHeight(lay.height);
    }
  };

  return (
    <View style={styles.root} onLayout={_onLayout}>
      <VideoPlayerLib
        source={source}
        fullscreen
        videoStyle={{
          width,
          height,
        }}
        style={{
          // flex: 1,
          width,
          height,
        }}
        navigator={navigation}
        poster={poster}
        tapAnywhereToPause
      />
    </View>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
