import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';
import { Audio }from 'expo';
import Cantonese from '../assets/sounds/DynamicRequireWorkaround.js'

export default class AudioButton extends Component {
  _onPressButton = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(Cantonese[this.props.sound]);
      await soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }

  _onLongPressButton = () => {
    Alert.alert(`${this.props.sound}`)
  }

  render() {
    return (
      <TouchableOpacity
      onPress={this._onPressButton}
      onLongPress={this._onLongPressButton}>
        <Image 
        source={require(`../assets/images/800px-circle-Flag_of_Hong_Kong.png`)}
        style={{width: 125, height: 125}} />
      </TouchableOpacity>
    );
  }
}
