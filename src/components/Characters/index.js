/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Loading, Character } from '../../components';
import styled from 'styled-components';

const Container = styled.div`
  top: 40px;
  position: relative;
`;

class Characters extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchCharactersAction();
 }

  render() {
    const { isLoading, characters, renderLoading } = this.props;

    return (
      <React.Fragment>
        <Loading isActive={isLoading} />
        <Container className="container">
          <div className="columns is-multiline">
          { characters.length ? characters.map(character => <Character {...character} key={character.id} />) : renderLoading }
          </div>
        </Container>
      </React.Fragment>
      )
  }
}

Characters.defaultProps = {
  renderLoading: <div className="container">loading...</div>,
  tryAgain: <div className="container">Character was not found!, try again</div>,
};

export default Characters;