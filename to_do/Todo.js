import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove, onChange}) => {
  const pressHandler = () => {
    onRemove(todo.id);
  };
  const pressComplited = () => {
    onChange(todo.id);
  };
  const strikeText = todo?.complited ? 'line-through' : 'none';

  return (
    <View style={styles.todoContainer}>
      <TouchableOpacity onPress={pressComplited} style={styles.actionIcon}>
        {todo.complited && <Text style={styles.action}>&#10004;</Text>}
      </TouchableOpacity>

      <View>
        <Text
          style={[
            styles.todoText,
            {
              textDecorationLine: strikeText,
              fontWeight: 'bold',
            },
          ]}>
          {todo.title}
        </Text>
        <Text
          style={[
            styles.todoText,
            {
              textDecorationLine: strikeText,
            },
          ]}>
          {todo.description}
        </Text>
      </View>

      <TouchableOpacity onPress={pressHandler} style={styles.todoDelete}>
        <Text style={styles.todoDeleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  actionIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFC640',
    alignSelf: 'center',
    borderColor: '#e9eeef',
    borderWidth: 1,
    borderRadius: 6,
  },
  action: {
    color: 'white',
    alignSelf: 'center',
  },
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 8,
    alignItem: 'center',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 12,
    backgroundColor: '#eee',
  },
  todoText: {
    color: '#778899',
    fontSize: 18,
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
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});

export default Todo;
