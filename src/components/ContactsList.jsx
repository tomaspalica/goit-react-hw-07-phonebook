import { useDispatch, useSelector } from 'react-redux';
import css from '../css/ContactsList.module.css';
import { deleteContacts } from 'redux/actions';
import { useEffect } from 'react';
import { fetchcontacts } from 'redux/operations';
export const ContactsList = () => {
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);
  const contactDelete = el => {
    dispatch(deleteContacts(el.target.id));
  };

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

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
