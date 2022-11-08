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
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  onSubmitMoveDataToApp = evt => {
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
  };

  onDeleteContact = evt => {
    const contactToDeleteID = evt.currentTarget.name;

    this.setState({
      contacts: this.state.contacts.filter(
        item => item.id !== contactToDeleteID
      ),
    });
  };

  componentDidMount() {
    const contactData = localStorage.getItem('contacts');
    const parsedData = JSON.parse(contactData);

    this.setState({ contacts: parsedData });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
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
        <NameList
          contacts={visibleContacts}
          deleteContact={this.onDeleteContact}
        />
      </>
    );
  }
}
