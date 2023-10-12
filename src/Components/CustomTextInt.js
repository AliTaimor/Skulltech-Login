import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const CustomTextInt = ({onChangeText, inputContainer, placeholder}) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.enterName, inputContainer]}
    onChangeText={onChangeText}></TextInput>
);

const styles = StyleSheet.create({
  enterName: {
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 30,
    // marginLeft: 10,
    // marginRight: 10,
  },
});
export default CustomTextInt;
