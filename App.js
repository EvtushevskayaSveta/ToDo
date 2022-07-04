import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import TodoList from './to_do/TodoList';
import Navbar from './to_do/Navbar';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navbar title="Todo app" />
      <TodoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
