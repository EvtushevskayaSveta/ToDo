import React, {useState} from 'react';
import {
  TextInput,
  View,
  Alert,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const TodoList = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const [descr, setDescr] = useState('');
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value + '\n' + descr);
      setValue('');
      setDescr('');
    } else {
      Alert.alert('enter the task name and description');
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Name"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setValue}
        value={value}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={setDescr}
        value={descr}
      />
      <TouchableOpacity style={styles.button}>
        <Button title="add" onPress={pressHandler} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 40,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#FFFFFF',
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
