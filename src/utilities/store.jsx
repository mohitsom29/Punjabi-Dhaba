import AppSlice from './AppSlice';
import { configureStore } from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {
        AppData: AppSlice,
    },
})

export default store;