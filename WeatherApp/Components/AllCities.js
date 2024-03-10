import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const AllCities = () => {
  return (
    <LinearGradient
      colors={["rgb(11,5,81)", "rgb(84,37,154)", "rgb(164,100,206)"]}
      locations={[0.29, 0.53, 0.8]}
      style={styles.allCities}
    >
      <View>
        <Text
          style={{
            color: "#C0C0C0",
            fontSize: 25,
            paddingLeft: 20,
            marginBottom: 20,
          }}
        >
          Weather
        </Text>
        <TextInput
          placeholderTextColor={"#C0C0C0"}
          style={styles.searchByCity}
          placeholder="Search for a city"
        />
      </View>
      <ScrollView style={styles.weatherByCity}>
        <View style={styles.weatherView}>
          <View style={styles.weatherViewTop}>
            <Text style={{ color: "white", fontSize: 48 }}>19°</Text>
            <Image
              style={styles.weatherlogo}
              source={require("../assets/MainLogo.png")}
            />
          </View>
          <View style={styles.weatherViewBottom}>
            <Text style={{ color: "#C0C0C0", fontSize: 15 }}>
              Chennai,India
            </Text>
            <Text style={{ color: "#C0C0C0" }}>Partly Cloudy</Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  allCities: {
    height: "100%",
    backgroundColor: "transparent",
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  searchByCity: {
    width: "100%",
    height: 45,
    paddingLeft: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    color: "white",
    borderColor: "#848484",
  },
  weatherByCity: {
    height: "80%",
    marginTop: 15,
  },
  weatherView: {
    width: "100%",
    height: 200,
    borderColor: "#E1D9D1",
    borderWidth: 1,
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: "space-between",
    padding: 8,
  },
  weatherViewTop: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  weatherViewBottom: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 5,
  },
  weatherlogo: {
    width: 120,
    height: 120,
  },
});

export default AllCities;
