import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import TodoList from './to_do/TodoList';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>To do list</Text>
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    windth: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default App;
