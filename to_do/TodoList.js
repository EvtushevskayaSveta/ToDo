import React, {useState} from 'react';
import {
  View,
  Alert,
  TextInput,
  StyleSheet,
  Button,
  SafeAreaView,
} from 'react-native';

const TodoList = ({onSubmit}) => {
  const [value, setValue] = useState('');
  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue('');
    } else {
      Alert.alert('enter the case name');
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
        autoCapitalize="none"></TextInput>
      <View style={styles.button}>
        <Button title="add" onPress={pressHandler} />
      </View>
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
