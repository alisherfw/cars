import React from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Navbar from '../components/navbar';

const width = Dimensions.get('window').width;

const HomeScreen = (props) => {
    return(
        <View>
            <ScrollView>
                <FlatList>

                </FlatList>
            </ScrollView>
            <Navbar props={props} />
        </View>
    )
}
const styles = StyleSheet.create({});

export default HomeScreen;