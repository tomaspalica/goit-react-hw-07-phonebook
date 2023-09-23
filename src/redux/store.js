import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './recuders';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
