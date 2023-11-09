/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [toDoList, setToDoList] = useState([
    'Do laundry',
    'Go to the gym',
    'Walk the dog'
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={toDoList} />
      <ToDoForm />
    </SafeAreaView>
  );
}

export default App;
