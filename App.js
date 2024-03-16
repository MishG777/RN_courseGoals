import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoals, setEnteredGoals] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoals(enteredText);
  }

  function addGoalHandler() {
    setGoals((prev) => {
      return [...prev, enteredGoals];
    });
  }

  return (
    <View style={styles.appContainer}>
      {/*input area, where users can enter a text and submit a goal */}
      <View style={styles.inputCont}>
        <TextInput
          onChangeText={goalInputHandler}
          placeholder="Enter Course Goal!"
          placeholderTextColor="grey"
          style={styles.textInput}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      {/*for outputing goals (list of goals)*/}
      <View style={styles.goalsCont}>
        <Text>{goals}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
    placeholder: "grey",
    width: "65%",
    padding: 8,
  },
  goalsCont: {
    flex: 5,
    flexDirection: "column",
  },
});
