import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';

export default class MultipleChoices extends Component {

  render() {
    const choices = this.props.answers
    return (
      <View>
          <View style={styleRow}>
             <Choice content={choices[0]} />
             <Choice content={choices[1]} />
             <Choice content={choices[2]} />
          </View>

          <View style={styleRow}>
             <Choice content={choices[3]} />
             <Choice content={choices[4]} />
             <Choice content={choices[5]} />
          </View>
      </View>
    );
  }
}

class Choice extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View style={styleButton}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text style={styleText}>{this.props.content}</Text>
        </TouchableOpacity>  
      </View>
    );
  }
}

const styleRow = {
  flex: 1,
  flexDirection: 'row',
}
const styleButton = {
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'blue',
  width: 80,
  height: 80,
  borderRadius: 10, 
  margin: 10
}
const styleText = {
  color: 'white',
  fontSize: 20
}
