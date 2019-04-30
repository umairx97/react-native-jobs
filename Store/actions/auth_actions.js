import { AsyncStorage } from "react-native";
import { FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAIL } from "./types";
import { Facebook } from "expo";

// How to use async storage
// AsyncStorage.setItem('fb_token', token);
// AsyncStorage.getItem('fb_token');

export const asyncFacebookLogin = () => async dispatch => {
  let token = await AsyncStorage.getItem("fb_token");

  if (token) {
    // dispatch action FB login is done
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
  } else {
    //FB login process starts if token is not saved

    doFacebookLogin(dispatch);
  }
};

doFacebookLogin = async dispatch => {
  let { type, token } = await Facebook.logInWithReadPermissionsAsync(
    "2038880549747433",
    {
      permissions: ["public_profile"]
    }
  );

  if (type === "cancel") {
    return dispatch({ type: FACEBOOK_LOGIN_FAIL });
  }

  await AsyncStorage.setItem("fb_token", token);
  dispatch({ type: FACEBOOK_LOGIN_SUCCESS, token });
};
