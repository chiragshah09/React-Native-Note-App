import React from 'react';
import { Button, View, Text } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';

class FlatList extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Implement a FlatList using Mock API</Text>
                {/* <Button
                    style={styles.navigation}
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                /> */}
            </View>
        )
    }
}

export default FlatList
