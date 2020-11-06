import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Navbar from '../components/navbar';

const CountryScreen = (props) => {
    return(
        <View>
            <Text>CountryScreen</Text>
            <Navbar props={props} />
        </View>
    )
}
const styles = StyleSheet.create({});

export default CountryScreen;