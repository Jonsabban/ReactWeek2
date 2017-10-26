import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

export default class Basics extends React.Component {
    static navigationOptions = { title: "Learn the Basics" };
    render() {
        return (<View><Text>Hello World</Text></View>)
    }
}

