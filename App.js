import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInputModal from './components/GoalInputModal';

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onAddGoal = value => {
    setGoalsList([...goalsList, { key: Math.random().toString(), value }]);
  };

  const onDeleteGoal = goalKey => {
    setGoalsList(goalsList.filter(goal => goal.key !== goalKey));
  };

  return (
    <View style={styles.screen}>
      <Button
        title="Add new goal"
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      />
      <GoalInputModal
        onAddGoal={onAddGoal}
        visible={modalVisible}
        setVisible={setModalVisible}
      />
      <FlatList
        data={goalsList}
        renderItem={itemData => (
          <GoalItem item={itemData.item} onDeleteGoal={onDeleteGoal} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  addButton: {
    marginBottom: 30,
  },
});
