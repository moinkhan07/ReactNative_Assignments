import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const NotificationView = ({ item }) => {
  const navigation = useNavigation();
  const handleNotificationPress = () => {
    navigation.navigate("SingleNotification", { notificationId: item });
  };

  return (
    <TouchableOpacity onPress={handleNotificationPress}>
      <View
        style={{
          height: 80,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
          marginBottom: 5,
        }}
      >
        <Text style={styles.text}>Notification {item}</Text>
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
  text: {
    color: "white",
    fontSize: 18,
  },
});
export default Notification;
