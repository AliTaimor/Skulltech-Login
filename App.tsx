import React, {useState} from 'react';
import Navigation from './src/Routes/Navigation';
import {NavigationContainer} from '@react-navigation/native';


const App = () => {
 
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  
  );
};


export default App;