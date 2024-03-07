import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { moin } from "../images.js";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.navbar}>
      <Pressable
        onPress={openDrawer}
        style={[styles.navView, { width: "12%" }]}
      >
        <Image style={styles.dp} source={{ uri: moin }} />
      </Pressable>
      <View style={[styles.navView, { width: "70%" }]}>
        <FontAwesome
          name="search"
          size={16}
          color="darkgrey"
          style={{ position: "absolute", top: 12, left: 9, zIndex: 2 }}
        />
        <TextInput
          placeholder={"Search"}
          placeholderTextColor={"darkgrey"}
          style={{
            width: "100%",
            height: "80%",
            color: "white",
            paddingLeft: 35,
            zIndex: 1,
            backgroundColor: "#39424F",
            borderRadius: 5,
          }}
        />
      </View>
      <View style={[styles.navView, { width: "12%" }]}>
        <MaterialCommunityIcons
          name="message-processing"
          size={26}
          color="gainsboro"
        />
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: {
    height: 50,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 4,
    backgroundColor: "#1A1F22",
  },
  navView: {
    alignItems: "center",
    justifyContent: "center",
  },
  dp: {
    width: "80%",
    height: "80%",
    borderRadius: 50,
  },
});
