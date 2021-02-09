import React from 'react';
import { View, Text, Button } from 'react-native';
// navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
// components
import Screen1 from './components/screen1';
import Screen2 from './components/screen2';
import Screen3 from './components/screen3';

const Stack = createStackNavigator();

const Menu = ({ navigation }) => <View
  style={{
    margin: 20,
    flex: 0.5,
    justifyContent: 'space-around'
  }}>
  {[...new Array(3).keys()].map(count => <Button key={count} title={`Screen${count + 1}`} onPress={() => navigation.navigate(`Screen${count + 1}`)} />)}
</View>

export default () => {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="menu" component={Menu} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  </NavigationContainer>
}