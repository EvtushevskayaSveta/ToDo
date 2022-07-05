import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

const TodoList = ({onSubmit}) => {
  const pressHandler = () => {
    onSubmit('test');
  };
  return (
    <View>
      <TextInput style={styles.input} label="Name" />
      <View style={styles.button}>
        <Button title="add" onPress={pressHandler} />
      </View>
      <TextInput style={styles.input} label="Descr"></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
  },
  button: {
    width: '15%',
    height: 40,
    position: 'absolute',
    right: 10,
    top: 45,
  },
});
export default TodoList;
