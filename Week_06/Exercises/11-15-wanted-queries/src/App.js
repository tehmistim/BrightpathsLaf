import React, { Component } from 'react';
import './App.css';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';

import routes from './routes';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
    this.closeMenu = this.closeMenu.bind(this)
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen })
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  render() {
    return (
      <div id="outerContainer" className="App">
        <Menu isOpen={this.state.menuOpen} pageWrapId={'pageWrap'} outerContainerId={'outerContainer'}>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/">
            <p name="homeOption">Home</p>
          </Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/enter">
            <p name="enterOption">Enter Wanted</p>
          </Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/modify">
            <p name="modifyOption">Modify Wanted</p>
          </Link>
          <Link onClick={() => this.closeMenu()} className="menu-item" to="/cancel">
            <p name="cancelOption">Cancel Wanted</p>
          </Link>
        </Menu>
        <div id="pageWrap">
          <div id="offset">
            {routes}
          </div>
          <div>
            <h6 name="version"> &nbsp;Version 1.1 </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default App;