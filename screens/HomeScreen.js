import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import Navbar from '../components/navbar';

const HomeScreen = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/matthlavacka/car-list/master/car-list.json')
        .then(response => response.json())
        .then(json => setData(json))
        .then(setLoading(false));
    }, []);

    return(
        <View>
            <View style={styles.container}>
            {
                isLoading ? (
                    <ActivityIndicator />
                ) : (
                <FlatList
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                    <TouchableOpacity 
                    style={styles.item}>
                        <Text style={styles.text}>
                        {item.brand}
                        </Text>
                    </TouchableOpacity>
                    
                )}
                />                    
                )
            }
            </View>
        <Navbar props={props} />
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        height: 60,
        marginLeft: 10,
        marginTop: 10,
    },
    container: {
        marginBottom: '10%'
    },
    item: {
        borderColor: 'silver',
        borderWidth: 1,
        marginHorizontal: 5,
        marginBottom: 0,
    }
});

export default HomeScreen;