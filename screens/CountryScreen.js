import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const CountryScreen = (props) => {
    const name = (props.navigation.state.params.name);
    const code = (props.navigation.state.params.code);
    return(
        <View>
            <Text>NAME: {name}</Text>
            <Text>CODE: {code}</Text>
        </View>
    )
}
const styles = StyleSheet.create({});

export default CountryScreen;