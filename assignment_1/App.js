import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  let arr = [
    "Trying New Things",
    "Art Galleries",
    "Rave",
    "Cafe Hopping",
    "Boxing",
    "Sake",
    "Fencing",
    "Gin Tonic",
    "Baking",
    "Environmentalism",
    "Road Trip",
    "Hockey",
    "Tea",
    "Climbing",
    "Tarot",
    "Online Shopping",
    "DIY",
    "Pimms",
    "VR Room",
    "Choir",
  ];

  const handleInterestCount = () => {
    if (count != 5) {
      setCount(count + 1);
    }
  };
  const clearCount = () => {
    if (count == 5) {
      setCount(0);
    } else {
      alert(`Your count is ${count}, first make it 5 to reset!`);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Interests</Text>
      <Text style={styles.sentence}>
        Let everyone know what you're passionate about, by adding it to your
        profile.
      </Text>
      <View style={styles.main}>
        {arr.map((int, i) => (
          <TouchableOpacity onPress={handleInterestCount}>
            <Text key={i} style={styles.interest}>
              {int}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity onPress={clearCount}>
        {count == 5 ? (
          <View style={styles.buttonDone}>
            <Text style={styles.continueBtnDone}>Continue</Text>
          </View>
        ) : (
          <View style={styles.button}>
            <Text style={styles.continueBtn}>Continue {count}/5</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
  },
  text: {
    fontSize: 30,
    paddingLeft: 10,
  },
  sentence: {
    paddingTop: 30,
    paddingHorizontal: 10,
    color: "grey",
  },
  main: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interest: {
    marginRight: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "grey",
    color: "grey",
    padding: 10,
    borderRadius: 20,
  },
  button: {
    backgroundColor: "#D4D8DE",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  buttonDone: {
    backgroundColor: "#FC3474",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    marginHorizontal: 20,
  },
  continueBtn: {
    color: "#82848D",
    fontSize: 18,
  },
  continueBtnDone: {
    color: "white",
    fontSize: 18,
  },
});
