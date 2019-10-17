
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FetchLocation from './components/FetchLocation';
import MapView from 'react-native-maps';





export default class App extends React.Component {
  
  
  getUserLocationHandler = () => {
    
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position);
    }, err => console.log(err));
  }
  render() {
    return (
      <View style={style.container}>
        <FetchLocation onGetLocation={this.getUserLocationHandler} />
        <Text>Hi</Text>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          />
      </View>
      
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

