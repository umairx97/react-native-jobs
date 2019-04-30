import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import * as actions from '../Store/actions'; 
import {Provider} from 'react-redux'
import {store} from '../Store' 



class AuthScreen extends Component {

  componentDidMount() {
    this.props.asyncFacebookLogin();
  }
  
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



export default connect(null,actions)(AuthScreen)