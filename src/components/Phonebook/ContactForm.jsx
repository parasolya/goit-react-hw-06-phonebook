import css from './Phonebook.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { nameAction, numberAction } from '../../redux/actions';

function ContactForm({ onSubmit }) {
  const { name, number } = useSelector(state => state.form);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        dispatch(nameAction(value));
        break;
      case 'number':
        dispatch(numberAction(value));
        break;
      default:
        return;
    }
  };

  const handleContactAdd = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };

    onSubmit(contact);
    dispatch(nameAction(''));
    dispatch(numberAction(''));
  };

  return (
    <div>
      <form className={css.phonebook__form} onSubmit={handleContactAdd}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => {
              handleInputChange(e);
            }}
            value={name}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={e => {
              handleInputChange(e);
            }}
          />
        </label>
        <button className={css.submit__btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default ContactForm;
