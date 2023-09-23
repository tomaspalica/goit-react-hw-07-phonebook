import { ContactsList } from './ContactsList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>

      <Filter></Filter>
      <ContactsList></ContactsList>
    </div>
  );
};
