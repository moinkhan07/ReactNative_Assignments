import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  Entypo,
  MaterialIcons,
  FontAwesome6,
  Fontisto,
} from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.footer}>
      <View style={styles.footerIcon}>
        <Pressable
          style={({ pressed }) => [
            styles.press,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("Home")}
        >
          <Entypo name="home" size={25} color="gainsboro" />
          <Text style={styles.iconText}>Home</Text>
        </Pressable>
      </View>
      <View style={styles.footerIcon}>
        <Pressable
          style={({ pressed }) => [
            styles.press,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("MyNetwork")}
        >
          <Fontisto name="persons" size={22} color="gainsboro" />
          <Text style={styles.iconText}>My Network</Text>
        </Pressable>
      </View>
      <View style={styles.footerIcon}>
        <Pressable
          style={({ pressed }) => [
            styles.press,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("Posts")}
        >
          <MaterialIcons name="add-box" size={27} color="gainsboro" />
          <Text style={styles.iconText}>Post</Text>
        </Pressable>
      </View>
      <View style={styles.footerIcon}>
        <Pressable
          style={({ pressed }) => [
            styles.press,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("Notification")}
        >
          <MaterialIcons name="notifications" size={25} color="gainsboro" />
          <Text style={styles.iconText}>Notifications</Text>
        </Pressable>
      </View>
      <View style={styles.footerIcon}>
        <Pressable
          style={({ pressed }) => [
            styles.press,
            { opacity: pressed ? 0.5 : 1 },
          ]}
          onPress={() => navigation.navigate("Jobs")}
        >
          <FontAwesome6 name="bag-shopping" size={22} color="gainsboro" />
          <Text style={styles.iconText}>Jobs</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  press: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "white",
    fontSize: 8,
  },
  footer: {
    height: 50,
    borderWidth: 0.3,
    borderTopColor: "grey",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  footerIcon: {
    width: "18%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
