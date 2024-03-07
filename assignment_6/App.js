import Home from "./Components/Home";
import MyNetwork from "./Components/MyNetwork";
import Posts from "./Components/Posts";
import Notification from "./Components/Notification";
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SingleNotification from "./Components/SingleNotification";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

const NotificationStack = createStackNavigator();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const NotificationStackScreen = () => {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <NotificationStack.Screen
        name="SingleNotification"
        component={SingleNotification}
        options={{ headerShown: false }}
      />
    </NotificationStack.Navigator>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
      <Tab.Screen
        options={{ header: () => <Navbar /> }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{ header: () => <Navbar /> }}
        name="MyNetwork"
        component={MyNetwork}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Posts"
        component={Posts}
      />
      <Tab.Screen
        options={{ header: () => <Navbar /> }}
        name="Notification"
        component={NotificationStackScreen}
      />
      <Tab.Screen
        options={{ header: () => <Navbar /> }}
        name="Jobs"
        component={Jobs}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="Main" component={MainStack} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F22",
    paddingTop: 30,
    paddingBottom: 20,
  },
});
