import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ goalItem, onDeleteItem }) => {
  return (
    <Pressable onPress={() => onDeleteItem(goalItem.item.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{goalItem.item.goal}</Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
