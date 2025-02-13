import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [courseGoals, setCourseGoals] = useState<string>("");
  const [courseGoalsList, setCourseGoalsList] = useState<string[]>([]);

  function goalInputHandler(enteredText: string) {
    setCourseGoals(enteredText);
  }

  function addGoalHandler() {
    setCourseGoalsList((currentGoals) => [...currentGoals, courseGoals]);
  }

  function removeGoalHandler(index: number) {
    setCourseGoalsList((currentGoals) =>
      currentGoals.filter((_, i) => i !== index)
    );
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="ADD Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoalsList}
          renderItem={({ item, index }) => (
            <GoalItem
              item={item}
              index={index}
              onRemoveGoal={removeGoalHandler}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 7,
  },
});
