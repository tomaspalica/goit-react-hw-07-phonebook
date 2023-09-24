import { useDispatch } from 'react-redux';
import css from '../css/Filter.module.css';
import { filterContacts } from 'redux/filterSlice';
const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filterContacts(e.target.value));
  };
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="enter the name"
        onChange={handleFilter}
      ></input>
    </label>
  );
};
export { Filter };
