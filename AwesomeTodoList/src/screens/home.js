
import React, { useState } from 'react';
import { Alert, SafeAreaView, Button } from 'react-native';
import ToDoForm from '../ToDoForm';
import ToDoList from '../ToDoList';
import ChuckNorrisFact from '../ChuckNorrisFact';


export default function Home ({ navigation }) {
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
            <ChuckNorrisFact />
            <Button
                title="Go to About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    )
}