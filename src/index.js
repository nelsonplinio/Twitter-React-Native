import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import Colors from './theme/colors';
export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} />
      <Routes />
    </>
  );
}
