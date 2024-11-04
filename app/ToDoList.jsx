import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

function ToDoList({ tasks, deleteTask }) {
  const handleDeleteTask = (task) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => deleteTask(task), style: "destructive" },
    ]);
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskItem}>{item}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(item)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      {tasks.length > 0 ? (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderTaskItem}
        />
      ) : (
        <Text style={styles.noTasksText}>No tasks to display</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
    backgroundColor: '#fff',
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  taskItem: {
    fontSize: 18,
    color: '#333',
  },
  deleteButton: {
    color: '#ff3333',
    fontWeight: 'bold',
  },
  noTasksText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ToDoList;
