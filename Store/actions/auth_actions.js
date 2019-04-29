import { AsyncStorage } from "react-native";
import { FACEBOOK_LOGIN_SUCCESS } from "./types";

// How to use async storage
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const asyncFacebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");

  if (token) {
    // dispatch action FB login is done
  } else {
    //FB login process starts if token is not saved
  }
};
