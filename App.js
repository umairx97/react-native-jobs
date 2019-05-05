import React from "react";

// Screens
import { Provider } from "react-redux";
import MainNavigator from './Navigation';
import { store } from "./Store";


class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <MainNavigator />
      </Provider>
    );
  }
}



export default App;
