import React from 'react';
import {StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';

const AddButton = ({onSubmit, value, descr, setDescr, setValue}) => {
  const pressHandler = () => {
    if (value.trim() && descr.trim()) {
      onSubmit(value, descr);
      setValue('');
      setDescr('');
    } else {
      Alert.alert('Please enter a name and description');
    }
  };

  return (
    <TouchableOpacity style={styles.addButton}>
      <Text
        onPress={pressHandler}
        style={{
          textAlignVertical: 'center',
          textAlign: 'center',
          color: '#fff',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        +
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 40,
    height: 40,
    position: 'absolute',
    right: 10,
    top: 45,
    backgroundColor: '#00cccc',
    borderColor: '#e9eeef',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddButton;
