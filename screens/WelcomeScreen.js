import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> WelcomeScreen </Text>
        <Text> WelcomeScreen </Text>
        <Text> WelcomeScreen </Text>
        <Text> WelcomeScreen </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
