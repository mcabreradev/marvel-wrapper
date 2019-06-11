import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Header, Error } from "../../components";
import CharactersContainer from '../CharactersContainer';
import CharacterDetailsContainer from '../CharacterDetailsContainer';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header/>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={CharactersContainer} />
            <Route exact path={`${process.env.PUBLIC_URL}/characters`} component={CharactersContainer} />
            <Route exact path={`${process.env.PUBLIC_URL}/characters/:id`} component={CharacterDetailsContainer} />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;