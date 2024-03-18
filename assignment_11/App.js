import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated, Easing } from "react-native";
import { Pedometer } from "expo-sensors";

const GOAL_STEPS = 1000;

export default function App() {
  const [steps, setSteps] = useState(0);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let subscription;
    const startTracking = async () => {
      try {
        await Pedometer.isAvailableAsync();
        subscription = Pedometer.watchStepCount((result) => {
          setSteps(result.steps);
        });
      } catch (error) {
        console.error(error);
      }
    };

    startTracking();

    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, []);

  useEffect(() => {
    updateProgress(steps);
  }, [steps]);

  const updateProgress = (stepCount) => {
    const newProgress = Math.min((stepCount / GOAL_STEPS) * 100, 100); // Limit to 100%
    Animated.timing(progress, {
      toValue: newProgress,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Steps: {steps}</Text>
      <View style={styles.progressBar}>
        <Animated.View
          style={[
            styles.progressIndicator,
            { width: `${Math.max(progress._value, 0)}%` },
          ]}
        />
      </View>
      <Text style={styles.goalText}>Goal: {GOAL_STEPS} steps</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "#fff",
  },
  progressBar: {
    width: "80%",
    height: 20,
    backgroundColor: "#ddd",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
  },
  progressIndicator: {
    height: "100%",
    backgroundColor: "green",
  },
  goalText: {
    fontSize: 16,
    color: "#fff",
  },
});
