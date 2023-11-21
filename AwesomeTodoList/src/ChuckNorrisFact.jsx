import React,{ useEffect,StyleSheet, useState } from "react";
import { Button, Pressable, Text } from "react-native";


const ChuckNorrisFact = ({}) => {
    const fetchChuckNorrisFact = async () => {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const json = await response.json();
        const fact = json.value;
        //const {value:fact} = json;
        setFact(fact);
    }
    const [fact, setFact] = useState('');

    useEffect(() => {
        fetchChuckNorrisFact();

    }, []);


    const handleRefresh = () => {
        fetchChuckNorrisFact();
    }
    return (
        <>
            <Text>{fact}</Text>
            <Button onPress={handleRefresh} title="Refresh" />
        </>
    );
}

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 16,
//         marginHorizontal: 20,
//         marginTop: 20,
//     },
// });
export default ChuckNorrisFact;

