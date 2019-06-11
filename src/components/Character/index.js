import React from 'react';
import { Link } from "react-router-dom";

const Character = ({id, name, thumbnail, comics, series, stories, events}) => (
  <div className="column is-2-desktop is-3-tablet">
    <Link to={`${process.env.PUBLIC_URL}/characters/${id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-square">
            <img src={thumbnail.path +'.'+ thumbnail.extension} alt={name + " Placeholder"} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-6">{ name }</p>
            </div>
          </div>

          <div className="content">
            { comics.available > 0 && (<span className="tag is-info">{comics.available } comics</span>) }
            { series.available > 0 && (<span className="tag is-success">{series.available } series</span>) }
            { stories.available > 0 && (<span className="tag is-warning">{stories.available } stories</span>) }
            { events.available> 0  && (<span className="tag is-danger">{events.available } events</span>) }
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Character;