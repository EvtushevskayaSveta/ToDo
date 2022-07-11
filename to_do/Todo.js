import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove}) => {
  const pressHandler = () => {
    onRemove(todo.id);
  };
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{todo.title}</Text>
      <TouchableOpacity onPress={pressHandler} style={styles.todoDelete}>
        <Text style={styles.todoDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    alignItem: 'center',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 12,
    backgroundColor: '#e9eeef',
  },
  todoText: {
    fontSize: 18,
    color: '#808080',
  },
  todoDelete: {
    height: 24,
    width: 24,
    backgroundColor: 'red',
    borderRadius: 12,
    alignSelf: 'center',
  },
  todoDeleteText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
  },
});

export default Todo;
