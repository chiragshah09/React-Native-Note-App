import React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native'

class FlatList extends React.Component {

    componentDidMount() {
        // When mounted, wait one second, then navigate to App
        setTimeout(() => {
            // Components that are placed inside a React Navigation
            // navigator will receive the `navigation` prop.
            // It's main usage is to trigger navigation events.
            // Right here we're telling it to navigate to the route
            // with the name 'App'.
            this.props.navigation.navigate('Home');
        }, 1000);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    //   hidden={true}
                    backgroundColor={'#115ead'}
                    barStyle='light-content'
                />
                <Image style={styles.logo} source={require('../../assets/icons8-scroll-128.png')} />
                <Text style={styles.logoText}>Scribble</Text>
            </View>
        )
    }
}

export default FlatList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#166fd3'
    },
    logo: {

    },
    logoText: {
        color: 'white',
        paddingTop: 10,
        fontSize: 30,
        textAlign: "center",
        paddingRight: 10,
        fontWeight: "bold",

    },
})
