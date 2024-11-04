import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (task) => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, task]);
    } else if (tasks.includes(task)) {
      Alert.alert("Duplicate Task", "This task already exists in your list.");
    }
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t !== task));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} deleteTask={deleteTask} />
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
