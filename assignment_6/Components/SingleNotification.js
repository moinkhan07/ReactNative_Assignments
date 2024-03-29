import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const SingleNotification = () => {
  const route = useRoute();
  const { notificationInfo } = route.params;
  return (
    <View style={styles.singleNotificationMain}>
      <Text style={{ color: "white" }}>{notificationInfo.notification}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  singleNotificationMain: {
    flex: 1,
    backgroundColor: "#1A1F22",
    paddingTop: 10,
    paddingLeft: 8,
  },
});

export default SingleNotification;
