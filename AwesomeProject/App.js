import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import AudioButton from './components/AudioButton';
import MultipleChoices from './components/MultipleChoices';


export default class Blah extends Component {
  constructor() {
    super();
    this.state = {
      question: 'yat1',
      answers: ['One', 'Two', 'Threeeee', 'Four', 'Five', 'Six']
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar} />

        <View style={styles.question}>
          <AudioButton sound={this.state.question}/>
        </View>

        <View style={styles.multipleChoiceAnswers}>
          <MultipleChoices answers={this.state.answers} />
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
