import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Notification = () => {
  return (
    <View style={styles.notificationMain}>
      <Text style={styles.text}>Notification Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
export default Notification;
