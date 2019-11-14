import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { connect } from 'react-redux'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

//import Geolocation from 'react-native-geolocation-service';


import CurrentLocation from './CurrentLocation';
import LocationList from './LocationList'; 


import { createLocation, removeAllLocations } from '../../../State/Actions/locations';
import moment from 'moment';


const styles = StyleSheet.create({
  wrapper: {
      fontSize: 20,
      //flex: 1, 
      justifyContent: 'space-between', 
      //alignItems: '',
      padding: 20,
      marginTop: 50
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  clearAllBtnWrapper: { 
    flexDirection: 'column',
    width: '100%', 
    justifyContent: 'flex-end',
  },
  clearAllBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    textAlign: 'center',
    padding: 20
  }
})

class HomeScreen extends React.Component {

  gpsOptions = {
    enableHighAccuracy: true, 
    timeout: 15000, 
    maximumAge: 10000,
    showLocationDialog: true
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.updateCurrentLocation.bind(this),this.updateCurrentLocationError.bind(this), this.gpsOptions);
    
    this.gpsWatch = navigator.geolocation.watchPosition(this.updateCurrentLocation.bind(this), this.updateCurrentLocationError.bind(this), this.gpsOptions);
  }
  componentWillUnmount() { 
    navigator.geolocation.clearWatch(this.gpsWatch); 
    navigator.geolocation.stopObserving();
  }

  updateCurrentLocationError(position) {
    console.log('position error', position);
  }

  updateCurrentLocation(position) {
    console.log('position updated', position);

    const pos = {
      ...position,
      _id: moment(position.timestamp).toISOString() 
    }

    this.props.createLocation(pos)
    .then(res => {
      console.log('res', res); 
    })
  }


  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.title}>Location Manager</Text>
        <CurrentLocation />
        <LocationList />
        <View style={styles.clearAllBtnWrapper}>
            <TouchableOpacity onPress={this.props.removeAllLocations}>
                <Text style={styles.clearAllBtn}>Clear All</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = {
  createLocation,
  removeAllLocations
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
