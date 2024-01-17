import React from 'react';
import Home from './pages/Home';
import Farm from './pages/Farm';
import Account from './pages/Account';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Farm">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Farm" component={Farm} />
        <Stack.Screen name="Account" component={Account}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




