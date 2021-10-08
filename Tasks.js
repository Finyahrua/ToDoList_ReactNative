import React from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";

const tasks = (props) => {
  return (
    <TouchableOpacity>
      <View style={styles.tasksWrapper}>
        <View style={styles.itemLeft}>
          <View style={styles.tasksBox}></View>
          <Text style={styles.text}>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  tasksWrapper: {
    width: 374,
    height: 54,
    flexDirection: "row",
    backgroundColor: "#FAECF3",
    marginTop: 20,
    borderRadius: 15,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 17,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.09,
    shadowRadius: 15,
    elevation: 2,
  },
  tasksBox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: "#EB66AE",
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  circular: {
    width: 16,
    height: 16,
    borderColor: "#55BCF6",
    borderWidth: 3,
    borderRadius: 8,
  },
  text: {
    maxWidth: "80%",
  },
});
export default tasks;
