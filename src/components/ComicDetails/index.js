/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Loading } from '../../components';
import styled from 'styled-components';

const Container = styled.div`
  top: 40px;
  position: relative;
`;

class ComicDetails extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchComicByIdAction(this.props.match.params.id);
 }

  render() {
    const { isLoading, comic } = this.props;
    if(comic.length > 0){
      const { name, thumbnail, comics, series, stories, events, description, urls } =comic[0];

      return (
        <React.Fragment>
          <Loading isActive={isLoading} />
          <Container className="container">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={ thumbnail.path +'.'+ thumbnail.extension} alt={ name + " Placeholder" } />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{ name }</p>
                    <p className="subtitle is-6">{ description }</p>
                  </div>
                </div>

                <div className="content">
                  <div className="columns">
                    <div className="column is-one-quarter">
                      <h6>Comics</h6>
                      <ul>
                        {comics.items.map(comic => (<li className="is-size-7" key={ comic.name }>{ comic.name} </li>))}
                      </ul>
                    </div>
                    <div className="column is-one-quarter">
                      <h6>Series</h6>
                      <ul>
                      {series.items.map(serie => (<li className="is-size-7" key={ serie.name }>{ serie.name} </li>))}
                      </ul>
                    </div>
                    <div className="column is-one-quarter">
                      <h6>Stories</h6>
                      <ul>
                      {stories.items.map(storie => (<li className="is-size-7" key={ storie.name }>{ storie.name} </li>))}
                      </ul>
                    </div>
                    <div className="column is-one-quarter">
                      <h6>Events</h6>
                      <ul>
                      {events.items.map(event => (<li className="is-size-7" key={ event.name }>{ event.name} </li>))}
                      </ul>
                    </div>
                  </div>

                  <h6>Links</h6>
                  <ul>
                  {urls.map(link => (<li className="is-size-7" key={ link.type }><a href={link.url}>{link.type}</a></li>))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </React.Fragment>
        )
    }
    else {
      return (
        'Loading..'
      )
    }
  }
}

export default ComicDetails;