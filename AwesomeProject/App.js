import React, { Component } from 'react';
import { AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View, Image } from 'react-native';
import AudioButton from './components/AudioButton';
import MultipleChoices from './components/MultipleChoices';
import { AnswerKey } from './assets/AnswerKey.js';


export default class Blah extends Component {
  constructor() {
    super();
    const allWords = Object.keys(AnswerKey)
    const allWordsShuffled = allWords.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])
    const sixRandomWords = allWordsShuffled.slice(0,6)
    const randomAnswer = sixRandomWords.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])[0]
    this.state = {
      canto: AnswerKey[randomAnswer],
      english: randomAnswer,
      answers: sixRandomWords
    };
  }

  _getNewWord = () => {
    const allWords = Object.keys(AnswerKey)
    const allWordsShuffled = allWords.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])
    const sixRandomWords = allWordsShuffled.slice(0,6)
    const randomAnswer = sixRandomWords.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1])[0]
    this.setState({
      canto: AnswerKey[randomAnswer],
      english: randomAnswer,
      answers: sixRandomWords
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar} />

        <View style={styles.question}>
          <AudioButton sound={this.state.canto}/>
        </View>

        <View style={styles.multipleChoiceAnswers}>
          <MultipleChoices answers={this.state.answers} answer={this.state.english} _getNewWord={this._getNewWord} />
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
