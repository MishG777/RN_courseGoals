import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

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
    }
    setEnteredGoals("");
  }

  return (
    <View style={styles.inputCont}>
      <TextInput
        value={enteredGoals}
        onChangeText={goalInputHandler}
        placeholder="Enter Course Goal!"
        placeholderTextColor="grey"
        style={styles.textInput}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 1,
    width: "65%",
    padding: 8,
  },
});
