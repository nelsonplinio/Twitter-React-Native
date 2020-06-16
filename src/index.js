import React from 'react';
import Routes from './routes';
import {StatusBar} from 'react-native';
import Colors from './theme/colors';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './store';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.background} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    </>
  );
}
