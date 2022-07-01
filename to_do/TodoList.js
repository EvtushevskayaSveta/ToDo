import React from 'react';
import {View, Text} from 'react-native';

const TodoList = () => {
  const todos = [
    {id: 1, complited: false, title: 'решать codeWars'},
    {id: 2, complited: false, title: 'писать проект'},
    {id: 2, complited: false, title: 'commit на gitHub'},
  ];
  return (
    <View>
      {todos.map((item, index) => (
        <Text>
          {index + 1}
          {item.title}
        </Text>
      ))}
    </View>
  );
};

export default TodoList;
