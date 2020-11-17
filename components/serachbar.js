import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {AntDesign} from '@expo/vector-icons';

const SearchBar = ({value, onValueSubmit, onChange}) => {
    return(
        <View style={styles.backgroundStyle}>
            <AntDesign name="search1" size={30} color="#000" />
            <TextInput 
                style={styles.input}
                placeholder="Search"
                placeholderTextColor="#8c8c8c"
                value={value}
                onChangeText={onChange}
                onEndEditing={onValueSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#d1d1d1',
        height: 40,
        margin: 5,
        borderRadius: 10,
        alignItems: 'center',
        paddingLeft: 5,
        flexDirection: 'row',
    },
    input: {
        marginLeft: 5,
        flex: 1,   
        fontSize: 20,
        color: '#555'
    }
});

export default SearchBar;