import {createStore} from 'redux';
import rootReducers from './reducers';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const persistedReducer = persistReducer(
  {
    storage: AsyncStorage,
    key: 'root',
    whitelist: ['tweets'],
  },
  rootReducers,
);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
