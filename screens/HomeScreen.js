import React from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Navbar from '../components/navbar';

const width = Dimensions.get('window').width;

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