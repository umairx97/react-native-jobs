import React, { Component } from "react";
import { Text, View, StyleSheet, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import * as actions from "../Store/actions";
import { Provider } from "react-redux";
import { store } from "../Store";

class AuthScreen extends Component {

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  // Uncomment to start with fresh state
  // componentWillMount() {
  //   AsyncStorage.removeItem('fb_token')

  // }

  componentDidMount() {
    this.props.asyncFacebookLogin();
    this.onAuthComplete(this.props);
  }

  onAuthComplete = props => {
    if (props.token) {
      this.props.navigation.navigate("map");
    }
  };

  render() {
    return (
      <View style={styles.container}>
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

const mapStateToProps = ({ facebook_auth }) => {
  return { token: facebook_auth.token };
};

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
