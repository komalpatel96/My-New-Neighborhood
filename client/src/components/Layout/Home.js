import React from "react";
import "./Nav.css";

const Home = React.createClass ({
	render: function() {
		return (
		<div>
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
		  <div className="modal fade" id="loginModal">
		    <div className="modal-dialog">
		      <div className="modal-content">

		        <div className="modal-header">
		          <button type="button" className="close" data-dismiss="modal">&times;</button>
		          <h3 className="modal-title">Log In</h3>
		        </div>

		        <div className="modal-body">
		          <form role="form" className="login">
		            <div className="form-group">
		              <input type="text" className="form-control" id="email-login" placeholder="Email" required>
		            </div>
		            <div className="form-group">
		              <input type="password" className="form-control" id="password-login" placeholder="Password" required>
		            </div>
		            <hr>
		            <button className="btn btn-primary btn-block" type="submit">Log In</button>
		          </form>
		        </div>
		      </div>
		    </div>
		  </div>

		</div>
		)
	}
});

export default Nav;
