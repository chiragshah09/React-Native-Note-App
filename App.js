import React from 'react';
import Main from './app/components/Main';
import store from './app/store'
import { Provider } from 'react-redux'
import { Button, Switch, StyleSheet } from 'react-native'
// import { createStackNavigator, createAppContainer } from "react-navigation";
// import Main from './app/components/Main';
import NewNote from './app/components/NewNote';
import FlatList from './app/components/FlatList';
import SplashScreen from './app/components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialIcons } from '@expo/vector-icons'; 

const Stack = createStackNavigator();

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false,
      bookmarkChecked: false,
    }
  }

  toggleSwitch = () => {
    this.setState({ isEnabled: !this.state.isEnabled })
  }

  toggleBookmark = () => {
    this.setState({ bookmarkChecked: !this.state.bookmarkChecked })
  }

  render() {
    console.log("isEna", this.state.isEnabled)


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
              initialParams={{ toggleValue: this.state.isEnabled }}
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
                    trackColor={{ false: "#115ead", true: "#81b0ff" }}
                    thumbColor={this.state.isEnabled ? "#fff" : "#19afd3"}
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
              initialParams={{ bookmarkValue: this.state.bookmarkChecked }}
              options={{
                title: '', headerRight: () => (
                  this.state.bookmarkChecked ?
                  <MaterialIcons name="bookmark" size={24} color="black" style={styles.bookmark} onPress={() => this.toggleBookmark()}
                    // title="Bookmark"
                    // color="#111"
                    // fontColor="red"
                    paddingRight={0}
                  />
                  :
                  <MaterialIcons name="bookmark-border" size={24} color="black" style={styles.bookmark} onPress={() => this.toggleBookmark()}
                    // title="Bookmark"
                    // color="#111"
                    // fontColor="red"
                    paddingRight={0}
                  />
                  )
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookmark: {
    right: 20,
  }
});
