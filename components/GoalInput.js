import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";
//import imgg from "../assets/images/goal.png";

const GoalInput = (props) => {
  const [enteredGoals, setEnteredGoals] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoals(enteredText);
  }

  function addGoalHandler() {
    if (enteredGoals.length > 0) {
      props.setGoal((prev) => {
        return [
          ...prev,
          { goal: enteredGoals, id: Math.random().toString() * 10 },
        ];
      });
      props.modalHandler();
    }
    setEnteredGoals("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputCont}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoals}
          onChangeText={goalInputHandler}
          placeholder="Enter Course Goal!"
          placeholderTextColor="#9b79c7"
          style={styles.textInput}
        />
        <View style={styles.BtnContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.modalHandler}
              color="#e02281"
            />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b688f2" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7d22f2",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "#e4d0ff",
    borderRadius: 6,
    color: "#7d22f2",
    width: "80%",
    height: 40,
    padding: 8,
  },
  BtnContainer: {
    flexDirection: "row",
  },
  button: {
    width: "25%",
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
