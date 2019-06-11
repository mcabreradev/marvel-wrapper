import React from 'react';
import { Link } from "react-router-dom";
import { constants } from "../../utils/constants";

const styles = {
  padding: "19px 0px 0px 0px"
};

const Header = () => (
  <nav className="navbar is-fixed-top has-background-grey-darker">
    <div className="navbar-brand">
        <Link to={`${process.env.PUBLIC_URL}/`}><span className="navbar-item has-text-weight-semibold is-size-4 has-text-white">{constants.app.name}</span></Link>
        <small className="has-text-white" style={styles}> v{constants.app.version}</small>
        <div className="navbar-burger burger" data-target="navMenuColorinfo-example"> <span /> <span /> <span />
        </div>
    </div>

    <div className="navbar-menu">
        <div className="navbar-end">
        </div>
    </div>
  </nav>
);

export default Header;