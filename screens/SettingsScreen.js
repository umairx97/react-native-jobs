import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Settings",
  });
  render() {
    return (
      <View style={styles.container}>
        <Text> SettingScreen </Text>
        <Text> SettingScreen </Text>
        <Text> SettingScreen </Text>
        <Text> SettingScreen </Text>
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
