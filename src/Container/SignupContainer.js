import {SignupScreen} from '../Screens/Index';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Alert} from 'react-native';
function SignupContainer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleValidation = () => {
    if (name == '' || email == '' || phonenumber == '' || password == '') {
      setError(true);
      return;
    }
    if (password !== confirmPassword) {
      setError(true);
      return;
    } else Alert.alert('Account created successfully');
  };

  const navigation = useNavigation();
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  return (
    <SignupScreen
      handleNavigateBack={handleNavigateBack}
      name={name}
      email={email}
      phonenumber={phonenumber}
      password={password}
      handleValidation={handleValidation}
      setName={setName}
      setEmail={setEmail}
      setPhonenumber={setPhonenumber}
      setPassword={setPassword}
      error={error}
      confirmPassword={confirmPassword}
      setConfirmPassword={setConfirmPassword}
    />
  );
}
export default SignupContainer;
