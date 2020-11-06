import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from '../components/navbar';

const HomeScreen = (props) => {
    return(
        <View>
            <Navbar props={props} />
        </View>
    )
}
const styles = StyleSheet.create({});

export default HomeScreen;