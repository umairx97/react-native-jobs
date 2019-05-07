import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/Ionicons";

// Screens
import AuthScreen from "./screens/AuthScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import MapScreen from "./screens/MapScreen";
import DeckScreen from "./screens/DeckScreen";
import ReviewScreen from "./screens/ReviewScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { Provider } from "react-redux";
// import { store } from "./Store";

export const MainNavigator = createBottomTabNavigator({
  welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  },
  auth: {
    screen: AuthScreen
  },
  main: {
    navigationOptions: {
      tabBarVisible: false
    },
    screen: createBottomTabNavigator({
      map: {
        screen: MapScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-compass" size={25} color={tintColor} />
          ),

          tabBarOptions: {
            activeTintColor: "#38ACEC"
          }
        }
      },
      deck: {
        screen: DeckScreen,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-briefcase" size={25} color={tintColor} />
          ),
          tabBarOptions: {
            activeTintColor: "#38ACEC"
          }
        }
      },
      review: {
        screen: createStackNavigator(
          {
            review: {
              screen: ReviewScreen
            },
            settings: {
              screen: SettingsScreen
            }
          },
          {
            navigationOptions: {
              tabBarIcon: ({ tintColor }) => (
                <Icon name="ios-paper" size={25} color={tintColor} />
              ),
              tabBarOptions: {
                activeTintColor: "#38ACEC"
              }
            }
          }
        )
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
