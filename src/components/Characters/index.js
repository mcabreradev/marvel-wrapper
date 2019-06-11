/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Loading } from '../../components';

class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCharactersAction();
 }

  render() {
    const { isLoading } = this.props;
    return (
          <React.Fragment>
            <Loading isActive={isLoading} />
            <h2 className="title is-2 has-text-grey has-text-centered">Characters Component</h2>
          </React.Fragment>
      )
  }

}

export default Characters;