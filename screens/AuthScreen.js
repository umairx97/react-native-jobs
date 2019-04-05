import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class AuthScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
        <Text> AuthScreen </Text>
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
