import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';

export default class AudioButton extends Component {
  _onPressButton() {
    Alert.alert('You pressed the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    return (
          <TouchableOpacity
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}>
            <Image 
            source={require(`../images/800px-circle-Flag_of_Hong_Kong.png`)}
            style={{width: 125, height: 125}} />
          </TouchableOpacity>
    );
  }
}
