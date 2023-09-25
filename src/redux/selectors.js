import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isloading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;

export const selectFilterNames = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter === '') {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredUsers = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredUsers;
  }
);
