import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://650c248747af3fd22f67208c.mockapi.io';

export const fetchcontacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const respone = await axios.post('/contacts', { contacts });
      console.log(respone.data.contacts);
      return respone.data.contacts;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (contactID, thunkAPI) => {
    try {
      const respone = await axios.delete(`/contacts${contactID}`);
      return respone.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
