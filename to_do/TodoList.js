import React, {useState, useRef} from 'react';
import {TextInput, StyleSheet, SafeAreaView, Alert} from 'react-native';
import AddButton from './AddButton';

const TodoList = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const [descr, setDescr] = useState('');

  const secondTextInput = useRef();

  return (
    <SafeAreaView style={styles.todoContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setValue(text)}
        returnKeyType="next"
        value={value}
        onSubmitEditing={() => secondTextInput.current.focus()}
      />
      <TextInput
        style={styles.input}
        placeholder="Descr"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setDescr(text)}
        ref={secondTextInput}
        value={descr}
      />
      <AddButton
        onSubmit={onSubmit}
        value={value}
        descr={descr}
        setDescr={setDescr}
        setValue={setValue}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: '#e9eeef',
  },
  input: {
    width: '70%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    padding: 8,
    fontSize: 18,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 12,
  },
});

export default TodoList;
