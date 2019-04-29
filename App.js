import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

// Screens
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Provider } from "react-redux";
import { store } from "./Store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

export const MainNavigator = createBottomTabNavigator({
  welcome: {
    screen: WelcomeScreen
  },
  auth: {
    screen: AuthScreen
  },
  main: {
    screen: createBottomTabNavigator({
      map: {
        screen: MapScreen
      },
      deck: {
        screen: DeckScreen
      },
      review: {
        screen: createStackNavigator({
          review: {
            screen: ReviewScreen
          },
          settings: {
            screen: SettingsScreen
          }
        })
      }
    })
  }
});

export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
