import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ToDoList({ tasks }) {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.taskItem}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  taskItem: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default ToDoList;
