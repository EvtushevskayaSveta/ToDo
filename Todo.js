import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Todo = ({todo}) => {
  return (
    <View style={styles.row}>
      <Text>{todo.title}</Text>
    </View>
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
