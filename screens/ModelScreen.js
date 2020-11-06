import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ModelScreen = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);

    return(
        <View>
            <Text style={styles.text}>Name: {data.name}</Text>
            <Text style={styles.text}>Email: {data.email}</Text>
            <Text style={styles.text}>Username: {data.username}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        alignSelf: "center",
        justifyContent: "center",

    }
});

export default ModelScreen;