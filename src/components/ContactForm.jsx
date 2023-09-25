import css from '../css/ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
const ContactForm = () => {
  const contactsList = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements[0].value;
    const number = form.elements[1].value;

    if (contactsList.find(el => el.name === name)) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(
        addContact({
          name,
          number,
        })
      );
    }
    form.reset();
  };

  return (
    <div className={css.formWrap}>
      <h2>Phonebook</h2>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />{' '}
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button>add contact</button>
      </form>
    </div>
  );
};

export { ContactForm };
