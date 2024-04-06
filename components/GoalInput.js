import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
        <TextInput
          value={enteredGoals}
          onChangeText={goalInputHandler}
          placeholder="Enter Course Goal!"
          placeholderTextColor="grey"
          style={styles.textInput}
        />
        <View style={styles.BtnContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.modalHandler} />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
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
});
