import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native';

const ModelScreen = () => {

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
            {
                isLoading ? (
                    <ActivityIndicator />
                ) : (
                <FlatList 
                data={data}
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                    <TouchableOpacity>
                        <Text style={styles.text}>
                            {item.models}
                        </Text>
                    </TouchableOpacity>
                    
                )}
                />                    
                )
            }
            
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        height: 60,
        marginLeft: 10,
        marginTop: 10
    }
});

export default ModelScreen;