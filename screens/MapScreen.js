import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { Button } from 'react-native-elements';
import { MapView } from "expo";
import { connect } from "react-redux";

import {fetchJobs} from '../Store/actions/job_actions';
// import * as actions from "../Store/actions";

class MapScreen extends Component {
  state = {
    apiKey: "4201738803816157",
    region: {
      // Old Coordinates
      longitude: -122,
      latitude: 37,

      // Location for karachi
      // longitude: 67.0822,
      // latitude: 24.9056,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    },

    mapLoaded: false
  };

  componentDidMount() {
    this.setState({
      mapLoaded: true
    });
  }

  onRegionChangeComplete = region => {
    this.setState({
      region
    });
  };


  onButtonPress =  () => { 
    this.props.fetchJobs(this.state.region)
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <ActivityIndicator size="large" color="dodgerblue" />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={this.state.region}
          rotateEnabled={false}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />

        <View style={styles.buttonContainer}>
          <Button
            large
            title="Search Jobs"
            buttonStyle = {{padding: 15, backgroundColor: '#0d98ba' }}
            icon={{ name: "search", color: 'white', size: 20, }}
            onPress = {this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20, 
  }
});

export default connect(
  null,
  {fetchJobs}
)(MapScreen);
