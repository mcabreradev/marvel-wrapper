/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';


class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCharactersAction();
 }

  render() {
    return (
          <h2 className="title is-2 has-text-grey has-text-centered">Characters Component</h2>
      )
  }

}

export default Characters;