import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class DeckScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text> DeckScreen </Text>
        <Text> DeckScreen </Text>
        <Text> DeckScreen </Text>
        <Text> DeckScreen </Text>
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
