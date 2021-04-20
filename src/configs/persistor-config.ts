import {IRootState} from './../store/index';
import {PersistConfig} from 'redux-persist/es/types';
import AsyncStorage from '@react-native-community/async-storage';

export const persistConfig: PersistConfig<IRootState> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['todosReducer', 'settingsReducer'],
};
