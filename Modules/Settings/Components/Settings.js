import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


class SettingsScreen extends React.Component {
    // dispatch settings action 
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Text>Disable GPS ON/OFF</Text>
      </View>
    );
  }
}

export default SettingsScreen;