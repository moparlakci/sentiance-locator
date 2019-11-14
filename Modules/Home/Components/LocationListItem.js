import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    listItem: {
        marginBottom: 20,
        
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    timestamp: {
        color: 'gray',
        fontSize: 12
    }
})

class LocationListItem extends React.Component {
    
    state = {
        name: null
    }
    apiKey = '496c8e7934e445369a8185aa5d09e947';

    componentDidMount() {
        this.checkOpenCageData();
    }
    checkOpenCageData() {
        const { item } = this.props;
        const { coords } = item;
        if(!coords) {
            return; 
        }
        const { longitude, latitude } = coords;

        const latLong = latitude + ',' + longitude;

        const url = 'https://api.opencagedata.com/geocode/v1/json?q=' + latLong + '&key=' + this.apiKey;

        console.log('url', url);

        fetch(url)
        .then(res => res.json())
        .then(result => {
            this.setState({
                name: result.results[0].formatted
            })
        })
    }

    render() {
        const { name } = this.state;
        const { item, showRemoveBtn, onRemove } = this.props;
        const { timestamp } = item;

        return (
            <View style={styles.listItem}>
                <View>
                    <Text style={styles.name}>{name ? name : 'N/A'}</Text>
                    {timestamp && <Text style={styles.timestamp}>{moment(timestamp).format('DD/MM/YYYY HH:mm:ss')}</Text>}
                </View>
                {showRemoveBtn &&
                    <View>
                        <TouchableOpacity onPress={onRemove}> 
                            <Text>Remove</Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}

export default LocationListItem;