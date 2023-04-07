import React from 'react';
import { Platform, View } from 'react-native';
import WebView from 'react-native-webview';

export const YoutubePlayer: React.FC<{ src: string }> = ({ src }) => {
  return (
    <View style={{ flex: 2 }}>
      <WebView
        style={{
          marginTop: Platform.OS === 'ios' ? 20 : 0,
          marginBottom: 15,
          width: '100%',
          aspectRatio: 4 / 3,
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsFullscreenVideo={true}
        scrollEnabled={false}
        userAgent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36"
        source={{ uri: `https://www.youtube.com/embed/${src}` }}
      />
    </View>
  );
};
