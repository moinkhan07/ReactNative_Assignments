import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const value = await AsyncStorage.getItem("openCount");
        if (value !== null) {
          setCount(parseInt(value));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    const saveCount = async () => {
      try {
        await AsyncStorage.setItem("openCount", (count + 1).toString());
      } catch (error) {
        console.error(error);
      }
    };

    saveCount();
  }, [count]);

  const clearCount = async () => {
    try {
      await AsyncStorage.setItem("openCount", "0");
      setCount(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff", fontSize: 20 }}>
        Number Of Time App Opened:
      </Text>
      <Text style={{ color: "#fff", fontSize: 35 }}>{count}</Text>
      <Pressable
        onPress={clearCount}
        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
      >
        <View style={styles.resetBtn}>
          <Text style={{ color: "white", fontSize: 20 }}>Reset</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  resetBtn: {
    width: 200,
    height: 50,
    backgroundColor: "green",
    borderRadius: 10,
    marginTop: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
