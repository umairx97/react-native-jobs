import _ from "lodash";
import React, { Component } from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import Slides from "../components/Slides";

import { AppLoading } from "expo";

const SLIDE_DATA = [
  {
    text: "Set Your Location",
    color: "#03A9F4",
    iconName: "ios-compass"
  },
  {
    text: "Find Local Jobs",
    color: "#CB4E4E",
    iconName: "ios-search"
  },
  {
    text: "Get Hired!!",
    color: "#f48b03",
    iconName: "ios-checkmark-circle"
  }
];

export default class WelcomeScreen extends Component {
  state = {
    token: null
  };

  // Checks if the token exists then redirects to maps page
  async componentWillMount() {

    let token = await AsyncStorage.getItem("fb_token");

    if (token) {
      this.props.navigation.navigate("map");
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  /* Navigation used for the last slide button */
  onSlidesComplete = () => {
    this.props.navigation.navigate("auth");
  };

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <View style={styles.container}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
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
