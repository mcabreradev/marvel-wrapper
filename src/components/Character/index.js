import React, { Component } from 'react';
import api from '../../utils/api';

// console.log(api.findAll());

class Character extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    api.findAll()
    .then( res => console.log(res))
 }

  render() {
    return (
          <h2 className="title is-2 has-text-grey has-text-centered">Character Component</h2>
      )
  }

}

export default Character;