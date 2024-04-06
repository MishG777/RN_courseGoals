import { View, StyleSheet, Text, Pressable } from "react-native";

const GoalItem = ({ goalItem, onDeleteItem }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "green" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={() => onDeleteItem(goalItem.item.id)}
      >
        <Text style={styles.goalText}>{goalItem.item.goal}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 8,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
