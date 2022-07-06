import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import TodoList from './to_do/TodoList';
import Navbar from './to_do/Navbar';
import Todo from './Todo';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: 1,
        complited: false,
        title,
      },
    ]);
  };
  return (
    <SafeAreaView>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <TodoList todos={todos} onSubmit={addTodo} />
        {todos.map(todo => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default App;
