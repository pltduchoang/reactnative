/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);

  const addMoreTask = (task) => {
    if (task === '') return;
    if (toDoList.includes(task)) {Alert.alert('Task already exists'); return};
    setToDoList([...toDoList, task]);
  };

  return (
    <SafeAreaView>
      <ToDoList tasks={toDoList} />
      <ToDoForm addTask={addMoreTask}/>
    </SafeAreaView>
  );
}

export default App;
