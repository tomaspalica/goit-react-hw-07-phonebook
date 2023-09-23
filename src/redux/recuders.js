import {
  addContacts,
  deleteContacts,
  filterContacts,
  readContacts,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export const contactsReducer = createReducer(initialState.contacts, {
  [addContacts]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContacts]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
  [readContacts]: (state, action) => {
    return (state = action.payload);
  },
});

export const filterReducer = createReducer(initialState.filter, {
  [filterContacts]: (state, action) => {
    return (state = action.payload);
  },
});
