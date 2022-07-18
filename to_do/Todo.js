import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove, onChange}) => {
  const pressOnRemove = () => {
    onRemove(todo.id);
  };
  const pressOnChange = () => {
    onChange(todo.id);
  };
  const strikeText = todo?.complited ? 'line-through' : 'none';

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={pressOnChange} style={styles.actionIcon}>
        {todo.complited && <Text style={styles.actionText}>&#10004;</Text>}
      </TouchableOpacity>

      <View style={styles.todoText}>
        <Text
          style={{
            textDecorationLine: strikeText,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {todo.title}
        </Text>
        <Text
          style={{
            textDecorationLine: strikeText,
            fontSize: 20,
          }}>
          {todo.description}
        </Text>
      </View>

      <TouchableOpacity onPress={pressOnRemove} style={styles.todoDelete}>
        <Text style={styles.todoDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
    padding: 12,
    backgroundColor: '#eee',
  },
  actionIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#ffd800',
    alignSelf: 'center',
    borderColor: '#e9eeef',
    borderWidth: 1,
    borderRadius: 6,
  },
  actionText: {
    color: 'white',
    alignSelf: 'center',
  },
  todoText: {
    left: 15,
    width: 240,
  },
  todoDelete: {
    height: 24,
    width: 24,
    backgroundColor: '#FF4900',
    borderColor: '#e9eeef',
    borderWidth: 1,
    borderRadius: 5,
    position: 'absolute',
    right: 10,
    alignSelf: 'center',
  },
  todoDeleteText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Todo;
