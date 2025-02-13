import { View, Text, Button, StyleSheet } from "react-native";

interface GoalItemProps {
  item: string;
  index: number;
  onRemoveGoal: (index: number) => void;
}

export default function GoalItem({ item, index, onRemoveGoal }: GoalItemProps) {
  return (
    <View style={styles.displayGoal}>
      <Text>{item}</Text>
      <Button title="❌" onPress={() => onRemoveGoal(index)} />
    </View>
  );
}

const styles = StyleSheet.create({
  displayGoal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    marginVertical: 8,
    backgroundColor: "#f8f8f8",
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
