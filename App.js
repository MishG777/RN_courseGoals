import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const modalHandler = () => {
    setModalIsVisible((prev) => !prev);
  };

  function deleteGoals(id) {
    setGoals((prev) => {
      return prev.filter((item) => item.id != id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/*input area, where users can enter a text and submit a goal */}
        <Button title="Add New Goal" color="#5e0acc" onPress={modalHandler} />
        <GoalInput
          setGoal={setGoals}
          visible={modalIsVisible}
          modalHandler={modalHandler}
        />

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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#7252cc",
  },

  goalsCont: {
    flex: 5,
    flexDirection: "column",
  },
});
