import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

const CountryScreen = (props) => {
    const name = (props.navigation.state.params.name);
    const code = (props.navigation.state.params.code);
    const lat = (props.navigation.state.params.lat);
    const lon = (props.navigation.state.params.lon);
    const city = (props.navigation.state.params.city);
    const state = (props.navigation.state.params.state);
    const country = (props.navigation.state.params.country);
    const woeid = (props.navigation.state.params.woeid);
    const tz = (props.navigation.state.params.tz);
    const phone = (props.navigation.state.params.phone);
    const type = (props.navigation.state.params.type);
    const email = (props.navigation.state.params.email);
    const url = (props.navigation.state.params.url);
    const runway_length = (props.navigation.state.params.runway_length);
    const elev = (props.navigation.state.params.elev);
    const icao = (props.navigation.state.params.icao);
    const direct_flights = (props.navigation.state.params.direct_flights);
    const carriers = (props.navigation.state.params.carriers);

    var latitude = parseFloat(lat);
    var longitude = parseFloat(lon);

    const [region, setRegion] = useState({
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03
    });

    return(
        <ScrollView>
            <MapView
                style={styles.mapView}
                region={region} 
                mapType={"satellite"}
                >
                    {/* <Marker coordinate={{ latitude: latitude, longitude: longitude }} /> */}
                </MapView>
            <View style={styles.container}>
            <View style={styles.itemView}>
                <Text style={styles.text}> NAME: </Text>
                <Text style={styles.item}> {name}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> CODE: </Text>
                <Text style={styles.item}> {code}</Text>
            </View>
            
            <View style={styles.itemView} >
                <Text style={styles.text}> LAT: </Text>
                <Text style={styles.item}> {lat}</Text>
                <Text style={{fontSize: 18, marginLeft: 50, backgroundColor: "#ccc"}}> LON: </Text>
                <Text style={styles.item}> {lon}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> CITY: </Text>
                <Text style={styles.item}> {city}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> STATE: </Text>
                <Text style={styles.item}> {state}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> COUNTRY: </Text>
                <Text style={styles.item}> {country}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> WOEID: </Text>
                <Text style={styles.item}> {woeid}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> TIME ZONE: </Text>
                <Text style={styles.item}> {tz}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> PHONE: </Text>
                <Text style={styles.item}> {phone}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> TYPE: </Text>
                <Text style={styles.item}> {type}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> EMAIL: </Text>
                <Text style={styles.item}> {email}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> URL: </Text>
                <Text style={styles.item}> {url}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> RUNWAY LENGTH: </Text>
                <Text style={styles.item}> {runway_length} ft </Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> ELEVATION: </Text>
                <Text style={styles.item}> {elev} m</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> ICAO: </Text>
                <Text style={styles.item}> {icao}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> DIRECT FLIGHTS: </Text>
                <Text style={styles.item}> {direct_flights}</Text>
            </View>

            <View style={styles.itemView} >
                <Text style={styles.text}> CARRIERS: </Text>
                <Text style={styles.item}> {carriers}</Text>
            </View>
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    mapView: {
        width: '95%',
        alignSelf: "center",
        marginTop: 10,
        height: 200,
    },
    itemView: {
        flexDirection: "row",
        margin: 2,
        backgroundColor: "#ddd"
    },
    text: {
        fontSize: 24,
        backgroundColor: "#ccc"
    },
    item: {
        fontSize: 24,
    }
});

export default CountryScreen;