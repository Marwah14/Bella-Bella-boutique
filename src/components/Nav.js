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
          <div
            className="nav-link"
            onClick={() => this.props.onNavClick(nav.toLowerCase())}
          >
            {nav}
            {isActive ? <span className="sr-only">(current)</span> : ""}
            <div>
                
            </div>
          </div>
        </li>
      );
    });
  }



  render() {
    return (
        <div>
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="navbar-brand" > 
        <img src="https://cdn10.bigcommerce.com/s-yhnrk5tq77/product_images/website_logo_1_1478206132__65915.jpg" width="auto" height="100"></img> </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
                {this.renderNavs()}

          </ul>
          <div>
          <button type="button" className="btn btn-cart cartbutton float-left" onClick={this.props.showCart}>Cart</button>
          </div>
        </div>
      </nav>
     
      </div>
    );
  }
}

export default Nav;