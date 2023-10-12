import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {CustomButton} from '../Components';
import {Facebook} from '../Assets/Icons';

function LoginScreen({
  password,
  email,
  setPassword,
  setEmail,
  error,
  handleChange,
  handleChangeForgotPass,
  handleNavigate,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoView}>
        <Image
          source={require('../Assets/Images/Blacklogo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Sign in</Text>
        <Text style={styles.emailTxt}>Email</Text>

        <TextInput
          placeholder="Enter your Email"
          style={styles.emailInt}
          maxLength={30}
          value={email}
          onChangeText={setEmail}></TextInput>

        <Text style={styles.passTxt}>Password</Text>
        <TextInput
          placeholder="Enter Password"
          style={styles.passwordInt}
          maxLength={30}
          value={password}
          onChangeText={setPassword}></TextInput>
        <TouchableOpacity activeOpacity={0.5} onPress={handleChangeForgotPass}>
          <Text style={styles.linkTxt}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.errorView}>
          {error && (
            <Text style={styles.errorText}>Invalid Email or Password</Text>
          )}
        </View>

        <View style={styles.loginButtomView}>
          <CustomButton onPress={handleChange} />
        </View>
        <View style={styles.txtBtnView}>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={styles.linkTxtTwo}>Don't have an account?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            style={styles.btnRegister}
            onPress={handleNavigate}>
            <Text style={styles.btnRegisterTxt}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.socialHeading}>Social Login</Text>
      <View style={styles.socialView}>
        <TouchableOpacity style={styles.btnFacebook} activeOpacity={0.5}>
          <Facebook height={30} width={30} color={'blue'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnGoogle} activeOpacity={0.5}>
          <Text style={styles.googleTxt}>Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logoView: {
    marginTop: 60,
    alignItems: 'center',
  },

  heading: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  innerContainer: {
    marginTop: 50,
    borderRadius: 70,
    paddingVertical: 30,
    backgroundColor: 'black',
    elevation: 20,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  emailInt: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  emailTxt: {
    marginLeft: 28,
    marginTop: 20,
    color: 'white',
  },

  passwordInt: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },

  passTxt: {
    marginLeft: 28,
    marginTop: 10,
    color: 'white',
  },
  buttonLogin: {
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  loginButtomView: {
    alignItems: 'center',
  },
  txtBtnView: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  linkTxt: {
    color: 'white',
    marginLeft: 250,
    paddingVertical: 5,
  },
  linkTxtTwo: {
    color: 'white',
  },
  btnRegister: {
    borderBottomWidth: 1,
    borderColor: 'white',

    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnRegisterTxt: {
    color: 'white',
  },
  logo: {
    width: 290,
    height: 100,
  },
  errorView: {
    paddingHorizontal: 110,
    paddingVertical: 10,
  },
  errorText: {
    color: 'red',
  },
  socialView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFacebook: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'darkblue',
    marginRight: 10,
  },
  btnGoogle: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 50,
    paddingVertical: 10,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  facebookTxt: {
    color: 'white',
  },
  googleTxt: {
    color: 'black',
  },
  socialHeading: {
    textAlign: 'center',
    borderBottomWidth: 1,
    paddingVertical: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
