import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const GoalItem = ({ item, onDeleteGoal }) => (
  <TouchableOpacity activeOpacity={0.8} onPress={() => onDeleteGoal(item.key)}>
    <View style={styles.goalItem}>
      <Text>{item.value}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  goalItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
