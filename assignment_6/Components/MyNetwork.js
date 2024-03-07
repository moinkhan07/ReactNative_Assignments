import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MyNetwork = () => {
  return (
    <View style={styles.myNetworkMain}>
      <Text style={styles.text}>My Network Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myNetworkMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
export default MyNetwork;
