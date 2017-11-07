import React from "react";

export const Nav = () => (
  <nav>
    <div className="container-fluid">
      <div className="container-nav">
        <div className="container-buttons">
          <a data-toggle="modal" data-target="#loginModal"> LOG IN </a>
          <a data-toggle="modal" data-target="#signupModal">SIGN UP</a>
        </div>
      </div>
    </div>
  </nav>

);

export default Nav;
