import { StyleSheet } from 'react-native';
import React from 'react';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import type { IMyLatLng } from '@tisf/rn-providers';

interface IGMapCustom {
  initial: IMyLatLng;
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export const GMapCustom = React.forwardRef<MapView, IGMapCustom>(
  ({ initial }, ref) => {
    return (
      <MapView
        style={styles.map}
        ref={ref}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: initial.lat || 24.929894,
          longitude: initial.lng || 67.062989,
          latitudeDelta: 0.03,
          longitudeDelta: 0.0331,
        }}
      />
    );
  }
);
