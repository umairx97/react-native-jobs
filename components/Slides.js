import React, { Component } from "react";
import { Text, View, ScrollView, StyleSheet, Dimensions } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  // Renders a button on the last slide
  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          icon={
            <Icon
              name="arrow-right"
              style={{ marginRight: 10 }}
              size={15}
              color="white"
            />
          }
          title="Lets Go!"
          color="white"
          buttonStyle={{
            padding: 10,
            marginTop: 10,
            borderColor: 'white', 
            borderWidth: 1
          }}
          type="outline"
          titleStyle={{ color: "white" }}
          onPress={this.props.onComplete}
        />
      );
    }
  };
  // Renders the slide on the welcome page one by one
  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}
        >
          <Ionicons name={slide.iconName} size={100} color="white" />
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  };

  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

export default Slides;

const styles = StyleSheet.create({
  slideStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH
  },
  slideText: {
    color: "white",
    fontSize: 20, 
    fontWeight: 'bold'
  }
});
