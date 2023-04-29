import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import type { MyLatLng } from '@tisf/rn-providers';
import type { ImageSource } from 'react-native-vector-icons/Icon';
import { LATITUDE_DELTA, locationPin, LONGITUDE_DELTA } from './util';

interface IGMapDisplay {
  latlng?: MyLatLng;
  zoom?: number;
  pin?: ImageSource;
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
  marker: {
    height: 30,
    aspectRatio: 0.66,
  },
});

export const GMapDisplay: React.FC<IGMapDisplay> = ({
  latlng,
  pin,
  zoom = 15,
}) => {
  const ref = React.useRef<MapView>(null);
  React.useEffect(() => {
    const refcur = ref.current;
    return () => {
      if (latlng) {
        refcur?.animateCamera({
          center: { latitude: latlng.lat, longitude: latlng.lng },
        });
      }
    };
  }, [latlng]);

  return (
    <View pointerEvents="none">
      <MapView
        style={styles.map}
        ref={ref}
        liteMode
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: latlng ? latlng.lat : 24.8125735,
          longitude: latlng ? latlng.lng : 67.0206727,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        initialCamera={{
          center: {
            latitude: latlng ? latlng.lat : 24.8125735,
            longitude: latlng ? latlng.lng : 67.0206727,
          },
          pitch: 45,
          heading: 90,
          altitude: 1000,
          zoom,
        }}
      >
        {latlng && (
          <Marker
            coordinate={{
              latitude: latlng.lat,
              longitude: latlng.lng,
            }}
          >
            <Image source={pin || locationPin} style={styles.marker} />
          </Marker>
        )}
      </MapView>
    </View>
  );
};
