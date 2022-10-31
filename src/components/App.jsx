import React, { Component } from 'react';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
  };

  onSubmitMoveDataToApp = evt => {
    console.log("App", evt);
  }

  render() {
    return <Form moveData={this.onSubmitMoveDataToApp}/>;
  }
}
