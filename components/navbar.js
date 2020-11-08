import React from 'react';
import {View, StyleSheet, Text, Dimensions, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const width = Dimensions.get('window').width;
 
const Navbar = ({props}) => {
    const {navigation} = props;
    return(
            <View style={styles.nav}>
                <TouchableOpacity>
                    <Text style={styles.navText}>Main</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Brand')}>
                    <Text style={styles.navText}>Brands</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Model')}>
                    <Text style={styles.navText}>Models</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Country')}>
                    <Text style={styles.navText}>Countries</Text>
                </TouchableOpacity>
            </View>
    )
}
const styles = StyleSheet.create({
    nav: {
        // position: "absolute",
        bottom: 0,
        flexDirection: 'row',
        zIndex: 999,
        justifyContent: "space-between",
        width: width,
        height: 50,
        backgroundColor: '#448aff',
    },
    navText: {
        fontSize: 15,
        color: '#eee',
        padding: 15,
    }
});

export default Navbar;