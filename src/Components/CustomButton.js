import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({buttonContainer = [], textStyle = [], onPress = []}) => (
  <TouchableOpacity
    style={[styles.buttonCreate, ...buttonContainer]}
    activeOpacity={0.5}
    onPress={onPress}>
    <Text style={textStyle}>Create</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  buttonCreate: {
    width: '30%',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 10,
    backgroundColor: 'white',
    // marginTop: 10,
    // paddingHorizontal: 50,
  },
});
export default CustomButton;
