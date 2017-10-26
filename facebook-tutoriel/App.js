import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser} from "expo";
import { StackNavigator } from 'react-navigation';
import BasicsScreen from './Basics';
import WhatToDoScreen from './WhatToDo';
import PropsScreen from './Props';
import StateScreen from './State';
import StyleScreen from  './Style';
import HeightWidthScreen from './HeightWidth';
import FlexScreen from './Flex';
import TextInputScreen from './TextInput';
import TouchScreen from './Touch';
import ScrollScreen from './Scrolling';
import FlatListScreen from './Flatlist';
import SectionListScreen from './Sectionlist';
import NetWorkingScreen from './Networking';


//Todo: Refactor into a seperate file (Basics.js), import and complete the exercise


//Todo: Refactor into a seperate file (Props.js), import and complete the exercise

//Todo: Create a new file (State.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (Style.js), import it, add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (HeightWidth.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (FlexBox.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (TextInput.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (Touches.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ScrollView.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (ListViews.js), import it,add a "Touchable", and complete the exercise
//Todo: Create a new file (NetWorking.js), import it,add a "Touchable", and complete the exercise

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

//Todo: Refactor into a seperate file (WhatToDo.js), import and complete the exercise


class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by cph-je94</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('Basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="States" />
        <Touchable onPress={() => navigate('style')} title="Style" />
        <Touchable onPress={() => navigate('heightWidth')} title="Height and Width" />
        <Touchable onPress={() => navigate('flex')} title="Flex" />
        <Touchable onPress={() => navigate('textInput')} title="Text Input" />
        <Touchable onPress={() => navigate('touch')} title="TouchScreen" />
        <Touchable onPress={() => navigate('scroll')} title="Scrolling" />
        <Touchable onPress={() => navigate('flatList')} title="FlatList" />
        <Touchable onPress={() => navigate('sectionList')} title="SectionList" />
        <Touchable onPress={() => navigate('networking')} title="Networking" />
        
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  Basics: { screen: BasicsScreen },
  props: { screen: PropsScreen },
  web: { screen: WhatToDoScreen },
  state: { screen: StateScreen},
  style: { screen: StyleScreen},
  heightWidth: { screen: HeightWidthScreen},
  flex: { screen: FlexScreen},
  textInput: { screen: TextInputScreen},
  touch: { screen: TouchScreen},
  scroll: { screen: ScrollScreen},
  flatList: { screen: FlatListScreen},
  sectionList: { screen: SectionListScreen},
  networking: { screen: NetWorkingScreen}
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})