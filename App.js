import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigator from './navigation/drawer'
export default class App extends React.Component {
  render(){
  return (
    <View>
     <NavigationContainer>
       <DrawerNavigator/>
     </NavigationContainer>
    </View>
  );
}
}

