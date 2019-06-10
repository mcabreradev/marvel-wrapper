import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Header, Error, Character } from "../../components";
// import RestaurantContainer from '../RestaurantsContainer';
// import OrderContainer from '../OrderContainer'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Router>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Character} />
            {/* <Route exact path={`${process.env.PUBLIC_URL}/restaurants`} component={RestaurantContainer} />
            <Route exact path={`${process.env.PUBLIC_URL}/restaurants/:id`} component={OrderContainer} /> */}
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;