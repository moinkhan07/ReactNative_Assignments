import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
} from "react-native";

// import LoginPage from "./LoginPage"; // Uncomment to see the Loginpage...

export default function App() {
  // return <LoginPage />; // Uncomment to see the Loginpage && commend all the bottom part...

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const handleStartTime = (text) => {
    setStartTime(parseInt(text));
  };

  const handleEndTime = (text) => {
    setEndTime(parseInt(text));
  };

  const handleReset = () => {
    setStartTime(0);
    setEndTime(0);
    setElapsedTime(0);
    setTimerRunning(false);
  };
  useEffect(() => {
    if (elapsedTime >= endTime - startTime) {
      setTimerRunning(false);
    }
  }, [elapsedTime, startTime, endTime]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    return `${hours < 10 ? "0" : ""}${hours}:${
      minutes < 10 ? "0" : ""
    }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 15,
          paddingTop: 100,
          color: "white",
        }}
      >
        {formatTime(elapsedTime)}
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder={"Start Time (In Seconds)"}
          onChangeText={handleStartTime}
          value={startTime.toString()}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder={"End Time (In Seconds)"}
          onChangeText={handleEndTime}
          value={endTime.toString()}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { opacity: pressed ? 0.7 : 1 },
            ,
            { backgroundColor: "green" },
          ]}
          onPress={handleStart}
        >
          <Text style={[styles.pressBtnText, { color: "white" }]}>Start</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { opacity: pressed ? 0.7 : 1 },
            ,
            { backgroundColor: "red" },
          ]}
          onPress={handleStop}
        >
          <Text style={[styles.pressBtnText, { color: "white" }]}>Stop</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            styles.pressableBtn,
            { opacity: pressed ? 0.7 : 1 },
            { backgroundColor: "dodgerblue" },
          ]}
          onPress={handleReset}
        >
          <Text style={[styles.pressBtnText, { color: "white" }]}>Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    height: 50,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 12,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  btnContainer: {
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pressableBtn: {
    width: "30%",
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pressBtnText: {
    fontSize: 16,
  },
});
