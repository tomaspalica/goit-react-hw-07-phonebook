import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContacts = createAction(
  'contacts/addContacts',
  (name, number) => {
    return {
      payload: {
        name: name,
        number: number,
        id: nanoid(),
      },
    };
  }
);
export const readContacts = createAction('contacts/readContacts')

export const deleteContacts = createAction('contacts/deleteContacts');

export const filterContacts = createAction('contacts/filterContacts');
