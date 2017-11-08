import React from "react";

export const Nav = () => (
  <nav>
    <div className="container-fluid">
      <div className="container-nav">
      <div className="navbar-header">
      <a className="navbar-brand" href="/">My New Neighborhood</a>
    </div>
        <div className="container-buttons">
          <a id="modalCSS" data-toggle="modal" data-target="#loginModal"> LOG IN </a>
          <a id="modalCSS" data-toggle="modal" data-target="#signupModal">SIGN UP</a>
        </div>
      </div>
    </div>
  </nav>

);

export default Nav;
