import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";

class App extends React.Component {
  render() {
    return <MainNavigator />;
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
