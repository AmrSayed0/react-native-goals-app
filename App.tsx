import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, FlatList, Text, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoalsList, setCourseGoalsList] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  function addGoalHandler(goal: string) {
    setCourseGoalsList((currentGoals) => [...currentGoals, goal]);
    setModalVisible(false);
  }

  function removeGoalHandler(index: number) {
    setCourseGoalsList((currentGoals) =>
      currentGoals.filter((_, i) => i !== index)
    );
  }

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#b35593" onPress={openModal} />
        <GoalInput
          visible={modalVisible}
          onAddGoal={addGoalHandler}
          oncancel={closeModal}
        />

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
    </>
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
