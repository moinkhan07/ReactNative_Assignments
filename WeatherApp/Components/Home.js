import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const HourlyForecastsScreen = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
      style={styles.hourlyDailyTemp}
    >
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12 PM</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12 PM</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12 PM</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12 PM</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12 PM</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
    </ScrollView>
  );
};

const DailyForecastsScreen = () => {
  return (
    <ScrollView
      horizontal={true}
      contentContainerStyle={styles.scrollViewContent}
      style={styles.hourlyDailyTemp}
    >
      <View style={styles.weatherTemp}>
        <Text style={{ color: "white", fontSize: 14 }}>12</Text>
        <Image
          style={{ width: 55, height: 55, marginVertical: 6 }}
          source={require("../assets/MainLogo.png")}
        />
        <Text style={{ color: "white", fontSize: 15 }}>19°</Text>
      </View>
    </ScrollView>
  );
};

const Tab = createMaterialTopTabNavigator();

const TabBtn = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.tempInfoBtnView}>
      <Pressable
        onPress={() => navigation.navigate("HourlyForecasts")}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
        <Text style={{ color: "#C0C0C0" }}>Hourly Forecasts</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("DailyForecasts")}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
        <Text style={{ color: "#C0C0C0" }}>Daily Forecasts</Text>
      </Pressable>
    </View>
  );
};

const Home = () => {
  return (
    <LinearGradient
      colors={["rgb(11,5,81)", "rgb(84,37,154)", "rgb(164,100,206)"]}
      locations={[0.29, 0.53, 0.8]}
      style={styles.homeMain}
    >
      <View style={styles.homeView}>
        <View style={styles.homeImg}>
          <Image
            style={styles.homeLogo}
            source={require("../assets/MainLogo.png")}
          />
          <Text style={{ color: "white", fontSize: 25 }}>Mumbai</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "white", fontSize: 45 }}>20</Text>
            <Text style={{ color: "white", fontSize: 28 }}>°</Text>
          </View>
          <Text style={{ color: "white", fontSize: 18 }}>Thunder Rain</Text>
        </View>
      </View>

      <View style={styles.tempInfo}>
        <Tab.Navigator
          tabBar={(props) => <TabBtn {...props} />}
          screenOptions={{
            headerShown: false,
            swipeEnabled: false,
          }}
          tabBarPosition="top"
        >
          <Tab.Screen
            name="HourlyForecasts"
            component={HourlyForecastsScreen}
          />
          <Tab.Screen name="DailyForecasts" component={DailyForecastsScreen} />
        </Tab.Navigator>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  homeMain: {
    height: "100%",
    backgroundColor: "transparent",
    justifyContent: "space-around",
  },
  homeView: {
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  homeImg: {
    height: 160,
    justifyContent: "center",
    alignItems: "center",
  },
  homeLogo: {
    width: 150,
    height: 150,
  },
  tempInfo: {
    height: "35%",
  },
  tempInfoBtnView: {
    height: 50,
    borderWidth: 0.3,
    borderColor: "grey",
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  hourlyDailyTemp: {
    height: "80%",
    borderBottomWidth: 0.3,
    borderBottomColor: "#D3D3D3",
    backgroundColor: "#9f5fca",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  weatherTemp: {
    width: 90,
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Home;
