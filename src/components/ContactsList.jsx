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
    dispatch(deleteContacts(el.target.id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ contacts }) => {
    console.log(contacts.name);
    contacts.name.toLowerCase().includes(normalizedFilter);
  });
  console.log(filteredContacts);
  return (
    <ul className={css.nameList}>
      {filteredContacts.map(({ id, name, number }) => (
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
