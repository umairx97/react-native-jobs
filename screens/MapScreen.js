import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class MapScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> MapScreen </Text>
        <Text> MapScreen </Text>
        <Text> MapScreen </Text>
        <Text> MapScreen </Text>
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
