import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationListItem from './LocationListItem';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 20,
        marginBottom: 20
    },
    title: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20
    },
    currentLocation: {
        width: '100%',
        justifyContent: 'flex-start',
        alignItems:'flex-start',
        flexDirection:'row'
    },
    image: {
        width: 70,
        backgroundColor: 'orange',
        borderRadius: 2,
        color: '#fff',
        padding: 20,
        marginRight: 20,
        textAlign: 'center'
    },
    location: {
        flex: 1
    }
})


const CurrentLocation = ({location, isLoading}) => {
    
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Current Location</Text>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && location && 
            <View style={styles.currentLocation}>
                <Text style={styles.image}>N/A</Text>
                <View style={styles.location}><LocationListItem item={location} showRemoveBtn={false} /></View>
            </View>}
        </View>
    )
}


const mapStateToProps = state => {

    const { items, isLoading } = state.locations;
    
    const location = items && items[0];
    return {
      location,
      isLoading
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation)
