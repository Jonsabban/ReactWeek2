import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

class Blink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showText: true};


        setInterval(() => {
            this.setState(previousState => {
              return { showText: !previousState.showText };
            });
          }, 1000);
        }



    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
           
            <Text>{display}</Text>
        )
    }
}

export default class BlinkApp extends React.Component {
    render() {
        return (
            <View>

            <Blink text="I love when my things work on the first try!"/>
            <Blink text="I agree with the first statement!"/>

            </View>
        )
    }
}

