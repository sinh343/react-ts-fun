import { createStore, combineReducers } from 'redux';
import { TerminalReducer as terminal } from 'components/terminal/reducer';
import { initialState } from 'initialState';

const AppReducer = combineReducers({
  terminal,
});

export const store = createStore(AppReducer, initialState)