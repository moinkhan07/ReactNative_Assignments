import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Jobs = () => {
  return (
    <View style={styles.jobsMain}>
      <Text style={styles.text}>Jobs Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  jobsMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
export default Jobs;
