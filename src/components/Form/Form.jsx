import style from './Form.module.css';
import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    // console.log(evt.currentTarget.name);
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log('handleSubmit', this.state);
    this.props.moveData(this.state);
    this.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
        <label> Name{}</label>
        <input
          className={style.input}
          onChange={this.handleInputChange}
          value={this.state.name}
          type="text"
          name="name"
          placeholder="Boris Johnsoniuk"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label> Number{}</label>
        <input
          className={style.input}
          onChange={this.handleInputChange}
          value={this.state.number}
          type="tel"
          name="number"
          placeholder="+123456789"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add Contact</button>
      </form>
    );
  }
}
