import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import {persistReducer} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';
import {persistConfig} from '../configs/persistor-config';
import {settingsReducer} from './settings/reducer';
import {todosReducer} from './todos/reducer';

const reducer = combineReducers({settingsReducer, todosReducer});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk] as const,
});

export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
