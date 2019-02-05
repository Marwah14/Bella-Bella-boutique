import React, { Component } from "react";



class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  renderNavs() {
    return this.props.navs.map(( nav, index) => {

      let isActive = nav.toLowerCase() === this.props.active;
      let style = isActive ? "nav-item active" : "nav-item";

      return (
        <li className={style} key={index}>
          <a
            className="nav-link"
            onClick={() => this.props.onNavClick(nav.toLowerCase())}
          >
            {nav}
            {isActive ? <span className="sr-only">(current)</span> : ""}
          </a>
        </li>
      );
    });
  }



  render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> Kathreen </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
                {this.renderNavs()}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;