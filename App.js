import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';

const {width, height} = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 10;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const App = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: -6.8947746,
          longitude: 108.7371457,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker coordinate={{latitude: -6.8665347, longitude: 106.4810058}}>
          <Callout>
            <Text>Jawa Barat</Text>
          </Callout>
        </Marker>
        <Marker coordinate={{latitude: -6.9633467, longitude: 107.8733942}}>
          <Callout>
            <Text>Jawa Tengah</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
