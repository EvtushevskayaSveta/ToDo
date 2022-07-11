import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import TodoList from './to_do/TodoList';
import Navbar from './to_do/Navbar';
import Todo from './to_do/Todo';

const App = () => {
  const [todos, setTodos] = React.useState([
    {id: Date.now().toString(), title: 'enter your task'},
  ]);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };
  return (
    <SafeAreaView>
      <Navbar title="Todo app" />
      <View style={styles.todo}>
        <View style={styles.container}>
          <TodoList todos={todos} onSubmit={addTodo} />
        </View>
      </View>
      <FlatList
        style={styles.container}
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Todo todo={item} onRemove={removeTodo} />
        )}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  todo: {
    backgroundColor: '#e9eeef',
  },
});

export default App;
