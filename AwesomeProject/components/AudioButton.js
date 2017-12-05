import React, { Component } from 'react';
import { TouchableOpacity, Image, Alert } from 'react-native';
import { Audio }from 'expo';

export default class AudioButton extends Component {
  async _onPressButton() {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require(`../sounds/jat1.mp3`));
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
            source={require(`../images/800px-circle-Flag_of_Hong_Kong.png`)}
            style={{width: 125, height: 125}} />
          </TouchableOpacity>
    );
  }
}
