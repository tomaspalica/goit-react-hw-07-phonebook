import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './recuders';
import { contactReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});
