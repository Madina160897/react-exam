import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { productsReducer, manyReducer, totalReducer } from "./reducers/productsReducer";
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, 
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';


const rootReducer = combineReducers({
  products: productsReducer,
  many: manyReducer,
  total: totalReducer,
});

const persistConfig = {
  key: 'root',
  key1: 'many',
  key2: 'total',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store;
 
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
