import react from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginContainer, SignupContainer} from '../Container/Index';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <Stack.Navigator initialRoute="Login">
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
