import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import AudioButton from './components/AudioButton';
import MultipleChoices from './components/MultipleChoices';


export default class Blah extends Component {
  _myFunction() {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar} />

        <View style={styles.question}>
          <AudioButton />
        </View>

        <View style={styles.multipleChoiceAnswers}>
          <MultipleChoices />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  topBar: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  question: {
    flex: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  multipleChoiceAnswers: {
    flex: 15
  }
})
