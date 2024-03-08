import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { moin, vivek, abdul } from "../images";
import { Entypo } from "@expo/vector-icons";

const data = [
  {
    id: "1",
    userImg: abdul,
    notification:
      "Your connection, Vivek Rajak, follows Moin Khan. View Moin's Profile ",
    time: "14m",
  },
  {
    id: "2",
    userImg: moin,
    notification:
      "Your connection, Vivek Rajak, follows Abdul Shaikh. View Abdul's Profile ",
    time: "1h",
  },
  {
    id: "3",
    userImg: vivek,
    notification:
      "Your connection, Abdul Shaikh, follows Moin Khan. View Moin's Profile ",
    time: "2h",
  },
  {
    id: "4",
    userImg: abdul,
    notification:
      "Your connection, Vivek Rajak, follows Moin Khan. View Moin's Profile ",
    time: "14m",
  },
  {
    id: "5",
    userImg: moin,
    notification:
      "Your connection, Vivek Rajak, follows Abdul Shaikh. View Abdul's Profile ",
    time: "1h",
  },
  {
    id: "6",
    userImg: vivek,
    notification:
      "Your connection, Abdul Shaikh, follows Moin Khan. View Moin's Profile ",
    time: "2h",
  },
  {
    id: "7",
    userImg: abdul,
    notification:
      "Your connection, Vivek Rajak, follows Moin Khan. View Moin's Profile ",
    time: "14m",
  },
  {
    id: "8",
    userImg: moin,
    notification:
      "Your connection, Vivek Rajak, follows Abdul Shaikh. View Abdul's Profile ",
    time: "1h",
  },
  {
    id: "9",
    userImg: vivek,
    notification:
      "Your connection, Abdul Shaikh, follows Moin Khan. View Moin's Profile ",
    time: "2h",
  },
  {
    id: "10",
    userImg: abdul,
    notification:
      "Your connection, Vivek Rajak, follows Moin Khan. View Moin's Profile ",
    time: "14m",
  },
];

const NotificationView = ({ item }) => {
  const navigation = useNavigation();
  const handleNotificationPress = () => {
    navigation.navigate("SingleNotification", { notificationInfo: item });
  };

  return (
    <TouchableOpacity onPress={handleNotificationPress}>
      <View style={styles.notificationView}>
        <View style={styles.notificationImageView}>
          <Image
            style={{ width: "80%", height: "80%", borderRadius: 50 }}
            source={{ uri: item.userImg }}
          />
        </View>
        <View style={styles.notificationInfoView}>
          <Text style={{ fontSize: 14, color: "white" }}>
            {item.notification}
          </Text>
        </View>
        <View style={styles.notificationTimeView}>
          <Text style={{ color: "white", fontSize: 11 }}>{item.time}</Text>
          <Entypo name="dots-three-vertical" size={18} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Notification = () => {
  return (
    <View style={styles.notificationMain}>
      <FlatList
        data={data}
        renderItem={({ item }) => <NotificationView item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notificationMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
  },
  notificationView: {
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#404247",
    marginBottom: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  notificationImageView: {
    width: "20%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationInfoView: {
    width: "65%",
    height: "80%",
  },
  notificationTimeView: {
    width: "10%",
    height: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default Notification;
