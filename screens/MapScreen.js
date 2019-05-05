import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { MapView } from "expo";

export default class MapScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1 }} />
      </View>
    );
  }
}
