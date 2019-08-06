import { createStore, combineReducers } from 'redux';
import { TerminalReducer as terminal } from 'components/terminal/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  terminal,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }