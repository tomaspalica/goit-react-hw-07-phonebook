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
  async ({ name, number }, thunkAPI) => {
    try {
      const respone = await axios.post('/contacts', { name, number });
      console.log(respone.data);
      return respone.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async (contactID, thunkAPI) => {
    try {
      console.log(contactID);
      const respone = await axios.delete(`/contacts/${contactID}`);
      console.log(respone.data);
      return respone.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
