import React, {useState, useEffect} from 'react';
import {View, StyleSheet, FlatList, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import SearchBar from '../components/serachbar';
// import Navbar from '../components/navbar';

const HomeScreen = ({props}) => {

    const [value, setValue] = useState('');
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/alisherfw/airports/master/db.json')
        .then(response => response.json())
        .then(json => setData(json));
    }, []);

    return(
        <View style={styles.View}>
            <SearchBar 
                value={value}
                onChange={setValue}
                onValueSubmit={() => console.log(value)}
            />
            <View style={styles.container}>
            {
                <FlatList
                data={data}
                keyExtractor={item => item.code}
                renderItem={({item}) => (
                    <TouchableOpacity style={styles.item}
                     onPress={() => props.navigation.navigate('Country', 
                     {
                         name: item.name,
                         code: item.code,
                         lat: item.lat,
                         lon: item.lon,
                         country: item.country,
                         state: item.state,
                         city: item.city,
                         woeid: item.woeid,
                         tz: item.tz,
                         phone: item.phone,
                         type: item.type,
                         email: item.email,
                         url: item.url,
                         runway_length: item.runway_length,
                         elev: item.elev,
                         icao: item.icao,
                         direct_flights: item.direct_flights,
                         carriers: item.carriers
                    }     
                     )}
                    >
                        <Text style={styles.code}>
                            {item.code}
                        </Text>
                        <Text style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                    
                )}
                />  
            }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    code: {
        fontSize: 25,
        height: 60,
        marginLeft: 10,
        marginTop: 10,
        color: "#311b92"
    },
    name: {
        fontSize: 20,
        marginHorizontal: 10,
        marginTop: 10,
    },
    container: {
        marginBottom: '10%'
    },
    item: {
        flexDirection: "row",
        borderColor: 'silver',
        borderWidth: 1,
        marginHorizontal: 5,
        marginBottom: 0,
    },
});

export default HomeScreen;