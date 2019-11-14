import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LocationListItem from './LocationListItem';

import { connect } from 'react-redux';

import { removeLocation } from '../../../State/Actions/locations';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 20
    },
    title: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 20
    }
})

const LocationList = ({isLoading, locations, removeLocation}) => {

    return ( 
        <View style={styles.wrapper}> 
            <Text style={styles.title}>Previous Locations</Text>

            <View>
                {isLoading && <Text>Loading...</Text>}
                {!isLoading && locations.map((x,i) => <LocationListItem item={x} key={i} showRemoveBtn={true} onRemove={() => removeLocation(x._id)} />)}
            </View>
            
        </View>
    )
}


const mapStateToProps = state => {

    const { items, isLoading } = state.locations;
    
    return {
      locations: items,
      isLoading
    }
}

const mapDispatchToProps = {
    removeLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationList)