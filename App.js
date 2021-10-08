import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Tasks from "./Tasks";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleOnAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Today's tasks</Text>
        <View style={styles.tasksWrapper}>
          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Tasks text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <View style={styles.taskInput}>
          <TextInput
            style={styles.input}
            placeholder={"Write a task..."}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
        </View>
        <TouchableOpacity onPress={() => handleOnAddTask()}>
          <View style={styles.addWrapper}>
            <Ionicons name="add" size={35} color="#E5E5E5" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CBCBCB",
  },
  headerContainer: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  tasksWrapper: {
    paddingTop: 25,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 15,
    elevation: 2,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#FCF8FA",
    borderRadius: 15,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 304,
  },
  addWrapper: {
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 15,
    elevation: 2,
  },
});
