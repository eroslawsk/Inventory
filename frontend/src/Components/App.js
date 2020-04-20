import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import AssetList from './Asset/AssetList';
import AssetForm from './Asset/AssetForm';
import EditAsset from './Asset/EditAsset';

class App extends React.Component{

  render() {
  return (
    <Router>
    <div>
<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to="/" className="navbar-item">
      <strong className="has-text-primary">Inventory</strong>
    </Link>
    <Link to="/" className="navbar-brand"></Link>
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
       <Link className="navbar-item" to="/create">Create Asset</Link>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
<Route path="/" exact component={AssetList} />
<Route path="/create" exact component={AssetForm} />
<Route path="/edit/:id" exact component={EditAsset} />
</div>
</Router>
    


  );
  }
}

export default App;
