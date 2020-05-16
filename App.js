import React from 'react';
import Main from './app/components/Main';
import store from './app/store'
import { Provider } from 'react-redux'
import { Button, Switch } from 'react-native'
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Main from './app/components/Main';
import NewNote from './app/components/NewNote';
import FlatList from './app/components/FlatList';
import SplashScreen from './app/components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false,
    }
  }

  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled })
  }

  render() {


    // if (state.isLoading) {
    //   // We haven't finished checking for the token yet
    //   return <SplashScreen />;
    // }

    return (
      <Provider store={store}>
        {/* <Main /> */}
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="Home"
              component={Main}
              options={{
                title: 'Notes',
                headerStyle: {
                  backgroundColor: '#166fd3',
                  borderBottomColor: '#166fd3'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  // fontWeight: 'bold',
                },
                headerLeft: null,
                headerRight: () => (
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    onValueChange={this.toggleSwitch}
                    value={this.state.isEnabled}
                  // onPress={() => alert('This is a button!')}
                  // title="Info"
                  // color="#111"
                  />)

              }}
            />

            <Stack.Screen
              name="NewNote"
              component={NewNote}
              options={{
                title: 'Add a new note', headerRight: () => (
                  <Button
                    onPress={() => alert('This is a button!')}
                    title="Bookmark"
                    // color="#111"
                    // fontColor="red"
                    // paddingRight={20}
                  />)
              }} />
            {/* <Stack.Screen name="FlatList" component={FlatList} /> */}
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{
                title: 'Notes',
                headerShown: false,

                // headerStyle: {
                //   backgroundColor: '#166fd3',
                // },
                // headerTintColor: '#166fd3',
                // headerTitleStyle: {
                //   fontWeight: 'bold',
                // },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: About
//   }
// });

// const AppContainer = createAppContainer(AppNavigator);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
