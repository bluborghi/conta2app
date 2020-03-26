import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ShadowPropTypesIOS } from 'react-native';
import { getData } from '../Global.js'

const home = ({route, navigation}) => {



    return (
        <View>
            <Text>this is the home screen</Text>
            <Text>welcome {route.params.auth.username}</Text>
        </View>
    )
}
export default home