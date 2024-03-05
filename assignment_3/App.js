import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  TextInput,
  RefreshControl,
} from "react-native";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [updatedTaskName, setUpdatedTaskName] = useState("");

  const addTask = () => {
    const data = { id: tasks.length + 1, name: "Initial Task!" };
    setTasks([...tasks, data]);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, name: updatedTaskName || "Initial Message!" };
      }
      return task;
    });
    setTasks(updatedTasks);
    setUpdatedTaskName("");
  };

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl onRefresh={addTask} colors={["red"]} tintColor="red" />
      }
    >
      {tasks.map((task) => (
        <View key={task.id} style={styles.taskView}>
          <View style={styles.infoView}>
            <ScrollView style={styles.info}>
              <Text>{task.name}</Text>
            </ScrollView>
            <View style={styles.btn}>
              <Pressable
                style={({ pressed }) => [
                  styles.press,
                  { opacity: pressed ? 0.5 : 1 },
                  { backgroundColor: "green" },
                ]}
                onPress={() => updateTask(task.id)}
              >
                <Text style={styles.btnText}>Add</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  styles.press,
                  { opacity: pressed ? 0.5 : 1 },
                  { backgroundColor: "red" },
                ]}
                onPress={() => deleteTask(task.id)}
              >
                <Text style={styles.btnText}>Delete</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={setUpdatedTaskName}
              value={updatedTaskName}
              placeholder="Add Task"
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  taskView: {
    height: 150,
    backgroundColor: "#DBDADB",
    marginBottom: 5,
  },
  infoView: {
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  info: {
    width: "80%",
    height: "100%",
    paddingTop: 10,
  },
  inputView: {
    height: 50,
    marginHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    borderColor: "grey",
  },
  btn: {
    alignItems: "center",
    justifyContent: "space-around",
    height: "100%",
  },
  btnText: {
    fontSize: 12,
    color: "white",
  },
  press: {
    borderWidth: 1,
    width: "100%",
    alignItems: "center",
    padding: 2,
    borderRadius: 5,
  },
});
