import React, { Component } from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';

export default class MultipleChoices extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <View>
          <View style={styleRow}>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[0]}</Text>
               </TouchableOpacity>  
             </View>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[1]}</Text>
               </TouchableOpacity>  
             </View>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[2]}</Text>
               </TouchableOpacity>  
             </View>
          </View>

          <View style={styleRow}>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[3]}</Text>
               </TouchableOpacity>  
             </View>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[4]}</Text>
               </TouchableOpacity>  
             </View>
             <View style={styleButton}>
               <TouchableOpacity onPress={this._onPressButton}>
                 <Text style={styleText}>{choices[5]}</Text>
               </TouchableOpacity>  
             </View>
          </View>
      </View>
    );
  }
}

let choices = ['One', 'Two', 'Threeeee', 'Four', 'Five', 'Six']
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
