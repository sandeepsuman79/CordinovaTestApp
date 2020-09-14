/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View } from 'react-native';
import AppNavigator from './Navigation/nav';

// import { Container } from './styles';

const App = () => {
  return (<View style={{flex:1}}>
    <AppNavigator/>
  </View>);
}

export default App;
