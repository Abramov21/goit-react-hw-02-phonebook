import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Form extends Component {
  state = { name: '', number: '' };

  nameInputId = nanoid();
  numberInputId = nanoid();

  hendleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  hendleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.hendleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.hendleInputChange}
            id={this.nameInputId}
          />
        </label>
        <label htmlFor={this.numberInputId}>
          Number:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.hendleInputChange}
            id={this.numberInputId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
