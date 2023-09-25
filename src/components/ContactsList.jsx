import { useDispatch, useSelector } from 'react-redux';
import css from '../css/ContactsList.module.css';
import { useEffect } from 'react';
import { fetchcontacts, deleteContacts } from 'redux/operations';
import { selectFilterNames } from 'redux/selectors';
export const ContactsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcontacts());
  }, [dispatch]);

  const contactDelete = el => {
    console.log(el.target.id);
    dispatch(deleteContacts(el.target.id));
  };

  const filteredNames = useSelector(selectFilterNames);

  return (
    <ul className={css.nameList}>
      {filteredNames.map(({ id, name, number }) => (
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
