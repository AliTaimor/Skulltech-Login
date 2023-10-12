import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginContainer, SignupContainer} from '../Container/Index';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();
function Navigation() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}
export default Navigation;
