import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import { History, LocationState } from 'history';
import { reducer as counterReducer } from './slices/Counter';

export default function createRootReducer<S = LocationState>(history: History<S>) {
  return combineReducers(
    {
      router: connectRouter(history),
      counter: counterReducer,
    },
  );
}
