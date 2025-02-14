import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

interface GoalInputProps {
  visible: boolean;
  oncancel: () => void;
  onAddGoal: (goal: string) => void;
}

export default function GoalInput({
  onAddGoal,
  visible,
  oncancel,
}: GoalInputProps) {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal(""); // Clear input after adding
  }

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={oncancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    width: "100%",
    borderColor: "#333",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
