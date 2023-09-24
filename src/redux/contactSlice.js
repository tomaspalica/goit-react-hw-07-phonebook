import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContacts, fetchcontacts } from './operations';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isloading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchcontacts.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(fetchcontacts.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;

        state.items = action.payload;
      })
      .addCase(fetchcontacts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;

        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deleteContacts.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isloading = false;
        const index = state.items.findIndex(
          task => task.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export const contactReducer = contactSlice.reducer;
