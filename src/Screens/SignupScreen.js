import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {CustomButton, CustomTextInt} from '../Components';
function SignupScreen({
  handleNavigateBack,
  handleValidation,
  name,
  email,
  phonenumber,
  password,
  setEmail,
  setName,
  setPhonenumber,
  setPassword,
  error,
  confirmPassword,
  setConfirmPassword,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={handleNavigateBack}>
        <Text style={styles.backBtnTxt}>X</Text>
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Image
          source={require('../Assets/Images/Blacklogo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.headingView}>
          <Text style={styles.headingTxt}>Lets Get Started</Text>
          <Text style={styles.headingTxtTwo}>
            Create an account to access all the features
          </Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <CustomTextInt
            placeholder="Enter your Name"
            inputContainer={error && !name ? styles.errorInput : {}}
            onChangeText={setName}
          />
          {error && !name && <Text style={styles.errorText}>*Required</Text>}
          <CustomTextInt
            placeholder="Enter your Email"
            inputContainer={error && !email ? [styles.errorInput] : []}
            onChangeText={setEmail}
          />
          {error && !email && <Text style={styles.errorText}>*Required</Text>}
          <CustomTextInt
            placeholder="+92 316 *******"
            inputContainer={error && !phonenumber ? [styles.errorInput] : []}
            onChangeText={setPhonenumber}
          />
          {error && !phonenumber && (
            <Text style={styles.errorText}>*Required</Text>
          )}
          <CustomTextInt
            placeholder="Enter your Password"
            inputContainer={error && !password ? [styles.errorInput] : []}
            onChangeText={setPassword}
          />
          {error && !password && (
            <Text style={styles.errorText}>*Required</Text>
          )}
          <CustomTextInt
            placeholder="Confirm Password"
            inputContainer={
              error && !confirmPassword ? [styles.errorInput] : []
            }
            onChangeText={setConfirmPassword}
          />
          {error && !confirmPassword && (
            <Text style={styles.errorText}>*Required</Text>
          )}

          <View style={styles.errorView}>
            {error && (
              <Text style={styles.errorText}>password do not match</Text>
            )}
          </View>
        </ScrollView>
        <View style={styles.buttonCreateView}>
          <CustomButton onPress={handleValidation} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
  },

  logo: {
    width: 290,
    height: 100,
  },
  logoView: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  innerContainer: {
    flex: 2,
    backgroundColor: 'black',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  headingView: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  headingTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  headingTxtTwo: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
    paddingVertical: 2,
  },

  buttonCreateView: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  buttonCreate: {
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  backBtnTxt: {
    color: 'black',
    fontWeight: 'bold',
    alignItems: 'center',
  },
  backBtn: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  errorView: {
    paddingHorizontal: 110,
    paddingVertical: 10,
  },
  errorText: {
    color: 'red',
    marginLeft: 12,
  },
  errorInput: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
export default SignupScreen;
