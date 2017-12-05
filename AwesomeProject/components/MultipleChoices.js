import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';

export default class MultipleChoices extends Component {

  render() {
    const choices = this.props.answers
    const answer = this.props.answer
    return (
      <View>
          <View style={styleRow}>
             <Choice content={choices[0]} answer={answer} _getNewWord={this.props._getNewWord} />
             <Choice content={choices[1]} answer={answer} _getNewWord={this.props._getNewWord} />
             <Choice content={choices[2]} answer={answer} _getNewWord={this.props._getNewWord} />
          </View>

          <View style={styleRow}>
             <Choice content={choices[3]} answer={answer} _getNewWord={this.props._getNewWord} />
             <Choice content={choices[4]} answer={answer} _getNewWord={this.props._getNewWord} />
             <Choice content={choices[5]} answer={answer} _getNewWord={this.props._getNewWord} />
          </View>
      </View>
    );
  }
}

class Choice extends Component {

  _onPressButton = () => {
    if (this.props.answer != this.props.content) {
      Alert.alert('Wrong, try again!')
    } else {
      this.props._getNewWord()
    }

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
