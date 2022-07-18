import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';

const TodoInput = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const [descr, setDescr] = useState('');

  const pressHandler = () => {
    if (value.trim() && descr.trim()) {
      onSubmit(value, descr);
      setValue('');
      setDescr('');
    } else {
      Alert.alert('Введите название дела и описание');
    }
  };

  return (
    <SafeAreaView style={styles.todoContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor={'#778899'}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setValue(text)}
        value={value}
      />
      <TextInput
        style={styles.input}
        placeholder="Descr"
        placeholderTextColor={'#778899'}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={text => setDescr(text)}
        value={descr}
      />
      <TouchableOpacity style={styles.addButton}>
        <Text
          onPress={pressHandler}
          style={{
            textAlignVertical: 'center',
            textAlign: 'center',
            color: '#fff',
            fontSize: 26,
          }}>
          +
        </Text>
      </TouchableOpacity>
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
    borderRadius: 16,
  },
  addButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 10,
    top: 40,
    backgroundColor: '#34D0BA',
    borderColor: '#e9eeef',
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default TodoInput;
