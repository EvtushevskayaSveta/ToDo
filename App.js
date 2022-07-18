import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import TodoList from './to_do/TodoList';
import Navbar from './to_do/Navbar';
import Todo from './to_do/Todo';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: Date.now().toString(),
      title: 'create your first task',
      description: 'and add its description',
      complited: false,
    },
  ]);
  const addTodo = (title, description) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        description,
        complited: false,
      },
    ]);
  };

  const pressOnRemove = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const pressOnChange = id => {
    setTodos(
      todos.map(prev => {
        if (prev.id === id) {
          return {
            ...prev,
            complited: !prev.complited,
          };
        }
        return prev;
      }),
    );
  };
  return (
    <SafeAreaView>
      <Navbar title="Todo list" />
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
          <Todo todo={item} onRemove={pressOnRemove} onChange={pressOnChange} />
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
