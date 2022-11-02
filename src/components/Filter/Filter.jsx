import React, { Component } from 'react';
import style from './Filter.module.css';

export class Filter extends Component {
    state = {
      filter: '',
     
    }; 

   
      handleInputChange = evt => {
        const { filter } = evt.currentTarget;
        console.log(evt.currentTarget.value);
       
        this.setState({
          [filter]: evt.currentTarget.value
        });
      };

      render() { return (
        <label>
          {' '}
          Find contacts by name
          <input
            className={style.input}
            onChange={this.handleInputChange}
            value={this.state.number}
            type="text"
            name="filter"
            placeholder="Type name to find"
          />
        </label>


      )
      }

}