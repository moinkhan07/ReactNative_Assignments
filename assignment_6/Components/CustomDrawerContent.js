import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { moin } from "../images";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const CustomDrawerContent = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topDrawer}>
        <Image style={styles.drawerImg} source={{ uri: moin }} />
        <Text style={styles.drawerUserName}>Moin Khan</Text>
        <Text style={styles.drawerViewProfile}>View Profile</Text>
      </View>
      <View style={styles.postData}>
        <View style={styles.profileView}>
          <Text style={{ color: "lightgrey", fontWeight: "500", fontSize: 17 }}>
            60
          </Text>
          <Text style={{ color: "darkgrey", paddingLeft: 5 }}>
            profile viewers
          </Text>
        </View>
        <View style={styles.postImpress}>
          <Text style={{ color: "lightgrey", fontWeight: "500", fontSize: 17 }}>
            800
          </Text>
          <Text style={{ color: "darkgrey", paddingLeft: 5 }}>
            post impressions
          </Text>
        </View>
      </View>
      <DrawerContentScrollView {...props}>
        <Text
          style={{
            color: "lightgrey",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Groups
        </Text>
        <Text
          style={{
            color: "lightgrey",
            marginTop: 20,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Events
        </Text>
      </DrawerContentScrollView>
      <View style={styles.drawerFooter}>
        <View style={styles.drawerFooterView}>
          <FontAwesome name="square" size={25} color="#F8C77E" />
          <Text style={styles.drawerFooterViewText}>Try Premium for ₹0</Text>
        </View>
        <View style={styles.drawerFooterView}>
          <MaterialIcons name="settings" size={25} color="lightgrey" />
          <Text style={styles.drawerFooterViewText}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F22",
    padding: 20,
  },
  topDrawer: {
    borderBottomColor: "grey",
    borderBottomWidth: 0.3,
  },
  drawerImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginBottom: 10,
  },
  drawerUserName: {
    color: "lightgrey",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 7,
  },
  drawerViewProfile: {
    color: "darkgrey",
    fontWeight: "bold",
    marginBottom: 15,
  },
  profileView: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
  },
  postImpress: {
    flexDirection: "row",
    borderBottomColor: "grey",
    borderBottomWidth: 0.3,
    paddingBottom: 20,
  },
  drawerFooter: {
    height: 140,
    borderTopWidth: 0.3,
    borderTopColor: "grey",
  },
  drawerFooterView: {
    flexDirection: "row",
    marginTop: 30,
  },
  drawerFooterViewText: {
    color: "lightgrey",
    paddingLeft: 10,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default CustomDrawerContent;
