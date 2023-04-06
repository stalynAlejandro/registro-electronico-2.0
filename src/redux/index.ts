import {
    AnyAction,
    CombinedState,
    combineReducers,
    configureStore,
    ThunkDispatch,
} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { themeReducer } from './theme';
import { configReducer } from './config';

export const rootReducer = combineReducers({ config: configReducer, theme: themeReducer });
export const store = configureStore({ reducer: rootReducer });

const _getDispatch = () => store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof _getDispatch>;

export const useAppDispatch = (): ThunkDispatch<CombinedState<RootState>, undefined, AnyAction> =>
    useDispatch<AppDispatch>();
