import Home from "./Components/Home";
import MyNetwork from "./Components/MyNetwork";
import Posts from "./Components/Posts";
import Notification from "./Components/Notification";
import Jobs from "./Components/Jobs";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { StyleSheet, View } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Navbar />
        <Tab.Navigator tabBar={(props) => <Footer {...props} />}>
          <Tab.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="MyNetwork"
            component={MyNetwork}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Posts"
            component={Posts}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Notification"
            component={Notification}
          />
          <Tab.Screen
            options={{ headerShown: false }}
            name="Jobs"
            component={Jobs}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1F22",
    paddingTop: 40,
    paddingBottom: 20,
  },
});
