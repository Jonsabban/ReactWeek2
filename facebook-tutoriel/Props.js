import React from 'react';
import { Image, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

class Props extends React.Component {
  static navigationOptions = { title: "Learn about Props" }
  render() {
    let pic = { uri: 'https://i.imgur.com/AvMeLHT.jpg' }
    return (
      <View>
      <Image source={pic} style={{ width: 200, height: 110 }} />
      <Text> Hello, {this.props.text}  </Text>
      </View>
      )
  }
}
export default class PictureWithText extends React.Component {
  render() {
    return (
      <View>
        <Props text='here is some picture text!' />
      </View>
    );
  }
}