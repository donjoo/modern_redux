import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';
import { apiSlice } from '../features/dogs/dogs-api-slice';


// No need for types in JavaScript, so you can omit AppDispatch and RootState
export const store = configureStore({
    reducer: {
        counter : counterReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    },
});