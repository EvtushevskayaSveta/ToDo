import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Todo = ({todo, onRemove}) => {
  const longPressHandler = () => {
    onRemove(todo.id);
  };
  return (
    <TouchableOpacity onLongPress={longPressHandler}>
      <View style={styles.row}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItem: 'center',
    borderColor: '#eee',
    borderWidth: 2,
    padding: 15,
  },
});

export default Todo;
