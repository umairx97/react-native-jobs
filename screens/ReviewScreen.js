import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Button } from "react-native-elements";
import WelcomeScreen from "./WelcomeScreen";

export default class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Review Jobs",
    headerRight: (
      <Button
        title="Settings"
        onPress={() => navigation.navigate("settings")}
        type="clear"
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
        <Text> ReviewScreen </Text>
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
