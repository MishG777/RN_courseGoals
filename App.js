import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  function deleteGoals(id) {
    setGoals((prev) => {
      return prev.filter((item) => item.id != id);
    });
  }

  return (
    <View style={styles.appContainer}>
      {/*input area, where users can enter a text and submit a goal */}
      <GoalInput setGoal={setGoals} />

      {/*for outputing goals (list of goals)*/}
      <View style={styles.goalsCont}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem goalItem={itemData} onDeleteItem={deleteGoals} />
          )}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
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

  goalsCont: {
    flex: 5,
    flexDirection: "column",
  },
});
