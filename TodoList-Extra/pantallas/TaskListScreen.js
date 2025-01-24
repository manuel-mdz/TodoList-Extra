import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

export const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now().toString(), text: task },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} onDelete={deleteTask} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});
