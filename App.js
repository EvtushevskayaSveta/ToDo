import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, View} from 'react-native';
import TodoList from './to_do/TodoList';
import Navbar from './to_do/Navbar';
import Todo from './to_do/Todo';

const App = () => {
  const [todos, setTodos] = React.useState([]);
  const addTodo = title => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
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
        <FlatList
          data={todos}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <Todo todo={item} />}></FlatList>
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
