import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SingleNotificationHeader = () => {
  const navigation = useNavigation();
  const handleNotificationView = () => {
    navigation.navigate("AllNotification");
  };
  return (
    <View style={styles.singleNotificationHeaderMain}>
      <Pressable
        onPress={handleNotificationView}
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </Pressable>
      <Entypo name="dots-three-horizontal" size={24} color="white" />
    </View>
  );
};

export default SingleNotificationHeader;

const styles = StyleSheet.create({
  singleNotificationHeaderMain: {
    backgroundColor: "#1A1F22",
    height: 60,
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
  },
});
