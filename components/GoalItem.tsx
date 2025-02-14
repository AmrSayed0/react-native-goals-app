import { View, Text, Button, StyleSheet, Pressable } from "react-native";

interface GoalItemProps {
  item: string;
  index: number;
  onRemoveGoal: (index: number) => void;
}

export default function GoalItem({ item, index, onRemoveGoal }: GoalItemProps) {
  return (
    <Pressable android_ripple={{ color: "#9e1993" }}>
      <View style={styles.displayGoal}>
        <Text style={styles.goalText}>{item}</Text>
        <Button title="❌" onPress={() => onRemoveGoal(index)} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  displayGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#f8f8f8",
    borderColor: "#ccc",
    borderRadius: 8,
    borderWidth: 1,
  },
  goalText: {
    padding: 10,
    color: "#333",
  },
});
