import { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

interface GoalInputProps {
  onAddGoal: (goal: string) => void;
}

export default function GoalInput({ onAddGoal }: GoalInputProps) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal(""); // Clear input after adding
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="ADD Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "70%",
    borderColor: "#333",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
});
