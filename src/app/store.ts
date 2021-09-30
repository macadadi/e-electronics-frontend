import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from '../features/api/ProductSlice';
import CategoryReducer from '../features/api/CategorySlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    category : CategoryReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
