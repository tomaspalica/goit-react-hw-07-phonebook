import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';
import css from '../css/App.module.css';
export const App = () => {
  return (
    <div className={css.box}>
      <ContactForm></ContactForm>

      <ContactsList>
        <Filter />
      </ContactsList>
    </div>
  );
};
