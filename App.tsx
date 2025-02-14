import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, Text } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoalsList, setCourseGoalsList] = useState<string[]>([]);

  function addGoalHandler(goal: string) {
    setCourseGoalsList((currentGoals) => [...currentGoals, goal]);
  }

  function removeGoalHandler(index: number) {
    setCourseGoalsList((currentGoals) =>
      currentGoals.filter((_, i) => i !== index)
    );
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <Text>Course Goals</Text>
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
  goalsContainer: {
    flex: 7,
  },
});
