import React, { useEffect, useRef } from 'react';
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { FAB } from 'react-native-paper';
import type { AddressModel } from '@tisf/rn-providers';
import { LocationFactory, useThemeStore } from '@tisf/rn-providers';
import { useNavigation } from '@react-navigation/native';
import { useFormikContext } from 'formik';
import MapView, { MapViewProps, PROVIDER_GOOGLE } from 'react-native-maps';
import { locationPin } from './util';
import type { ImageSource } from 'react-native-vector-icons/Icon';
import { FaLight } from '..';

interface IGMapAddress {
  pin?: ImageSource;
  address?: AddressModel;
}

export const GMapAddress: React.FC<IGMapAddress> = ({ pin, address }) => {
  const mapRef = useRef<MapView>(null);
  const navigation = useNavigation<any>();
  const palette = useThemeStore().palette;

  const { setValues } = useFormikContext<any>();

  const setAddressVal = (add: AddressModel | null, noanimate?: boolean) => {
    if (!add) {
      return;
    }

    setValues((v: any) => ({
      ...v,
      ...add,
      addressLine: add.firstLine,
    }));

    if (noanimate) {
      return;
    }

    if (add.geo) {
      mapRef.current?.animateCamera({
        center: {
          latitude: add.geo.lat,
          longitude: add.geo.lng,
        },
      });
    }
  };

  const onRegionChangeComplete: MapViewProps['onRegionChangeComplete'] = async (
    r,
    g
  ) => {
    if (g && g.isGesture) {
      const add = await LocationFactory.reverseGeocode({
        lat: r.latitude,
        lng: r.longitude,
      });
      await setAddressVal(add, true);
    }
  };

  const _getCurrentLocation = async () => {
    await LocationFactory.getCurrentAddress((a) => {
      setAddressVal(a);
    });
  };

  useEffect(() => {
    if (address) {
      setAddressVal(address);
    } else {
      _getCurrentLocation();
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <>
      <MapView
        style={styles.map}
        onRegionChangeComplete={onRegionChangeComplete}
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: address?.geo?.lat || 24.929894,
          longitude: address?.geo?.lng || 67.062989,
          latitudeDelta: 0.03,
          longitudeDelta: 0.0331,
        }}
      />

      <View
        pointerEvents="none"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          zIndex: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          style={styles.marker}
          resizeMode="contain"
          source={pin || locationPin}
        />
      </View>
      <FAB
        style={styles.fab}
        size="small"
        animated={false}
        icon={({ size }) => (
          <FaLight name="arrow-left" size={size} color={palette.primaryColor} />
        )}
        onPress={() => navigation.goBack()}
      />
      <FAB
        style={styles.fabRight}
        size="small"
        animated={false}
        icon={({ size }) => (
          <FaLight name="location" size={size} color={palette.primaryColor} />
        )}
        onPress={() => _getCurrentLocation()}
      />
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 15,
    left: 0,
    backgroundColor: 'white',
    padding: 5,
    top: StatusBar.currentHeight,
  },
  fabRight: {
    position: 'absolute',
    margin: 15,
    right: 0,
    backgroundColor: 'white',
    padding: 5,
    top: StatusBar.currentHeight,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 40,
    aspectRatio: 1,
    marginBottom: 45,
  },
});
