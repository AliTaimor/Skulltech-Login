import {useState} from 'react';
import {LoginScreen} from '../Screens/Index';
import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';

function LoginContainer() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleChange = () => {
    const confirmPassword = '1039';
    const confirmEmail = '1039@example.com';
    if (password == '' || email == '') {
      Alert.alert('One or more fields empty');
    }
    if (password === confirmPassword && email === confirmEmail) {
      Alert.alert('Signing in ...');
    } else {
      setError(true);
    }
  };
  const handleChangeForgotPass = () => {
    Alert.alert('Navigating to forgot password');
  };
  const handleNavigate = () => {
    navigation.navigate('Signup');
  };
  return (
    <LoginScreen
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      error={error}
      handleChange={handleChange}
      handleChangeForgotPass={handleChangeForgotPass}
      handleNavigate={handleNavigate}
    />
  );
}
export default LoginContainer;
