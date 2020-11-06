import React from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';
import Navbar from '../components/navbar';

const HomeScreen = (props) => {
    const navigation = props;
    return(
        <View>
            <Navbar props={navigation} />
        </View>
    )
}
const styles = StyleSheet.create({});

export default HomeScreen;