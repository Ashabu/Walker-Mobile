import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import AppStack from './Navigation/StackNavigation';
import AuthScreen from './Screens/Authorization/AuthScreen';
AppStack



const App = () => {

  return (
    <AppStack/>
  );
};

const styles = StyleSheet.create({

});

export default App;
