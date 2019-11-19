import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import Colors from './theme/colors';

import {Provider} from 'react-redux';

import store from './store';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
