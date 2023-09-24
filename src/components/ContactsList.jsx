import { useDispatch, useSelector } from 'react-redux';
import css from '../css/ContactsList.module.css';

import { useEffect } from 'react';
import { fetchcontacts, deleteContacts } from 'redux/operations';
export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);

  const contactDelete = el => {
    console.log(el.target.id);
    dispatch(deleteContacts(el.target.id));
  };

  const filterNames = () => {
    if (filter === '') {
      return contacts;
    }
    const filterValue = filter.toLowerCase();
    const filteredUsers = contacts.filter(({ name }) => {
      const nameValue = name.toLowerCase();
      return nameValue.includes(filterValue);
    });
    return filteredUsers;
  };

  // const normalizedFilter = filter.toLowerCase();

  // const filteredContacts = contacts.filter(({ name }) => {
  //   name.toLowerCase().includes(normalizedFilter);
  // });
  console.log(filterNames());
  return (
    <ul className={css.nameList}>
      {filterNames().map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}{' '}
          <button id={id} name={name} onClick={contactDelete}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};
