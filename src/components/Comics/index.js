/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Loading, Comic } from '../../components';
import styled from 'styled-components';

const Container = styled.div`
  top: 40px;
  position: relative;
`;

class Comics extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComicsAction();
 }

  render() {
    const { isLoading, comics, renderLoading } = this.props;

    return (
      <React.Fragment>
        <Loading isActive={isLoading} />
        <Container className="container">
          <div className="columns is-multiline">
          { comics.length ? comics.map(comic => <Comic {...comic} key={comic.id} />) : renderLoading }
          </div>
        </Container>
      </React.Fragment>
      )
  }
}

Comics.defaultProps = {
  renderLoading: <div className="container">loading...</div>,
  tryAgain: <div className="container">Comic was not found!, try again</div>,
};

export default Comics;