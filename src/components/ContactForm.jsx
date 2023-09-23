import { useEffect, useState } from 'react';
import css from '../css/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, readContacts } from 'redux/actions';
const ContactForm = () => {
  const contactsList = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const contactFromLS = localStorage.getItem('contacts');
    if (contactFromLS) {
      dispatch(readContacts(JSON.parse(localStorage.getItem('contacts'))));
    }
  }, [dispatch]);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contactsList));
  }, [contactsList]);

  const handleChange = e => {
    if (e.currentTarget.name === 'name') {
      setName(e.currentTarget.value);
    } else {
      setNumber(e.currentTarget.value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contactsList.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContacts(name, number));
      localStorage.setItem('contacts', JSON.stringify(contactsList));
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        name
        <input
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />{' '}
      </label>
      <label className={css.label}>
        Number
        <input
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button>add contact</button>
    </form>
  );
};

export { ContactForm };
