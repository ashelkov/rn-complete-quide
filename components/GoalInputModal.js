import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInputModal = ({ onAddGoal, visible, setVisible }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const addGoalHandler = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
    setVisible(false);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={setEnteredGoal}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingBottom: 10,
    marginVertical: 20,
  },
});

export default GoalInputModal;
