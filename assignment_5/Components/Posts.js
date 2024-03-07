import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Posts = () => {
  return (
    <View style={styles.postsMain}>
      <Text style={styles.text}>Post Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postsMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
export default Posts;
