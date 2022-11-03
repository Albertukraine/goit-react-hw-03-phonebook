import React, { Component } from 'react';
import { Form } from './Form/Form';
import { NameList } from './NameList/NameList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],

    filter: '',
  };

  handleInputChange = evt => {
    // console.log(evt.currentTarget.value);

    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  onSubmitMoveDataToApp = evt => {
    // console.log('App evt', evt);
    const contact = {
      id: nanoid(),
      name: evt.name,
      number: evt.number,
    };

    if (this.state.contacts.map(item => item.name).includes(evt.name))
      return alert(`${evt.name} is already in contacts`);

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));

    // console.log('at state now', this.state);
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    // console.log("NORM FILTER",normalizedFilter);
    // console.log("arrayNames", this.state.contacts);
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <>
        <Form moveData={this.onSubmitMoveDataToApp} />
        <Filter
          inputText={this.state.filter}
          onInput={this.handleInputChange}
        />
        <NameList contacts={visibleContacts} />
      </>
    );
  }
}
