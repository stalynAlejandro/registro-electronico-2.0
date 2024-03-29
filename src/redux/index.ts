import { useDispatch } from 'react-redux';
import { themeReducer } from './theme';
import { configReducer } from './config';
import { persistStore, persistReducer } from 'redux-persist';
import { AnyAction, CombinedState, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import persistCombineReducers from 'redux-persist/es/persistCombineReducers';

const persistConfig = {
    key: 'root',
    storage,
};

export const rootReducer = persistCombineReducers(persistConfig, {
    config: configReducer,
    theme: themeReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredPaths: ['items.dates'],
                ignoredActionPaths: ['register', 'rehydrate', 'persist/PERSIST'],
            },
        }),
});

const _getDispatch = () => store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const persistor = persistStore(store);
export const useAppDispatch = (): ThunkDispatch<CombinedState<RootState>, undefined, AnyAction> =>
    useDispatch<AppDispatch>();
