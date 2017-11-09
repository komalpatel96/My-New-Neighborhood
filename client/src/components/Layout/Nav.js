import React from "react";
import Modal from 'react-modal';
import axios from 'axios';
import Header from './Header.js';
import googleButton from './btn_google_signin_dark_normal_web.png';
import './nav.css';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

export default class Nav extends React.Component {

  constructor() {
    super();
 
    this.state = {
      modal1IsOpen: false,
      modal2IsOpen: false,

      usernameInput: "",
      passwordInput: "",
      nameInput: "",
      emailInput: "",
      ageInput: "",

      usernameLogin: "",
      passwordLogin: "",

      user: null,
      loggedIn: false,

      hideAccount: true,
      hideLogout: true,
      hideLogin: true,
      hideSignup: true,
      hideError: true

    };
 
    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

    this._logout = this._logout.bind(this);
    this._login = this._login.bind(this);

  }

  componentDidMount() {
    axios.get('/auth/user').then(response => {
      console.log(response.data)
      if (!!response.data.user) {
        console.log('A user is currently logged in')
        this.setState({
          loggedIn: true,
          user: response.data.user,
          hideAccount: false,
          hideLogout: false,
          hideLogin: true,
          hideSignup: true
        })
      } else {
        this.setState({
          loggedIn: false,
          user: null,
          hideAccount: true,
          hideLogout: true,
          hideLogin: false,
          hideSignup: false
        })
        console.log('No user is logged in. Set as Guest.')
      }
    })
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSignupSubmit(event) {
    event.preventDefault()
    // TODO - validate!
    axios
    .post('/auth/signup', {
      username: this.state.usernameInput,
      password: this.state.passwordInput,
      name: this.state.nameInput,
      email: this.state.emailInput,
      age: this.state.ageInput
    })
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('User added.')
        this.setState({
          usernameInput: "",
          passwordInput: "",
          nameInput: "",
          emailInput: "",
          ageInput: "",
          modal2IsOpen: false
        })
      } else {
        console.log('Error: Duplicate entry')
      }
    })
  }

  handleLoginSubmit(event) {
    event.preventDefault()
    console.log('handleLoginSubmit')
    this._login(this.state.usernameLogin, this.state.passwordLogin)
  }
 
  openModal1() {
    this.setState({modal1IsOpen: true});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }
 
  closeModal1() {
    this.setState({modal1IsOpen: false});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null,
          hideLogin: false,
          hideSignup: false,
          hideAccount: true,
          hideLogout: true
        })
      }
    })
  }

  _login(username, password) {
    axios
      .post('/auth/login', {
        username,
        password
      })
      .then(response => {
        console.log(response);
        console.log(response.status);
        if (response.status === 200) {
          this.setState({
            loggedIn: true,
            user: response.data.user,
            hideAccount: false,
            hideLogout: false,
            hideLogin: true,
            hideSignup: true,
            modal1IsOpen: false,
            hideError: true,
            usernameLogin: "",
            passwordLogin: ""
          })
        } else {
          this.setState({
            hideError: false
          })
        }
      })
  }
 
  render() {
    return (
    <div className="container-fluid">
      <div className="container-nav">

        <Header user={this.state.user} />
        <div className="container-buttons">
          <a className={this.state.hideLogin ? 'hidden' : ''} onClick={this.openModal1}> LOGIN </a>
          <a className={this.state.hideSignup ? 'hidden' : ''} onClick={this.openModal2}>SIGN UP</a>
          <a className={this.state.hideAccount ? 'hidden' : ''}>ACCOUNT</a>
          <a className={this.state.hideLogout ? 'hidden' : ''} onClick={this._logout}>LOGOUT</a>
        </div>
          <div>
            
          <Modal
              isOpen={this.state.modal1IsOpen}
              onRequestClose={this.closeModal1}
              style={customStyles}
              contentLabel="Log In Modal"
            >
            <div className="modal-header">
            <button type="button" className="close" onClick={this.closeModal1}>X</button>
            <h3 className="modal-title">Login</h3>
            </div>

            <div className="modal-body">
              <form className="login">
                <div className="form-group">
                  <input 
                  type="text" 
                  className="form-control" 
                  name="usernameLogin" 
                  placeholder="Username" 
                  value={this.state.usernameLogin} 
                  onChange={this.handleChange}
                  required></input>
                </div>
                <div className="form-group">
                  <input 
                  type="password" 
                  className="form-control" 
                  name="passwordLogin" 
                  placeholder="Password" 
                  value={this.state.passwordLogin} 
                  onChange={this.handleChange}
                  required></input>
                </div>
                <hr></hr>
                <button 
                className="btn btn-primary btn-block" 
                type="submit" 
                onClick={this.handleLoginSubmit}>
                Login</button>
              </form>
              <hr></hr>
              <button href="/auth/google">
              <img src={googleButton} alt="sign into Google Button" />
              </button>
              <hr></hr>
              <p id="errorMessage" className={this.state.hideError ? 'hidden' : ''}>An error has occurred. Please try again.</p>
            </div>
          </Modal>
          
          <Modal
              isOpen={this.state.modal2IsOpen}
              onRequestClose={this.closeModal2}
              style={customStyles}
              contentLabel="Example Modal 1"
            >
          <div className="modal-header">
          <button type="button" className="close" onClick={this.closeModal2}>X</button>
          <h3 className="modal-title">Sign Up</h3>
          </div>

          <div className="modal-body">
            <form className="signup">
              <div className="form-group">
                <input 
                type="text" 
                className="form-control"
                name="usernameInput" 
                placeholder="Username" 
                value={this.state.usernameInput} 
                onChange={this.handleChange}
                required></input>
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control" 
                name="passwordInput" 
                placeholder="Password" 
                value={this.state.passwordInput} 
                onChange={this.handleChange}
                required></input>
              </div>
              <div className="form-group">
                <input 
                type="text" 
                className="form-control" 
                name="nameInput" 
                placeholder="Name" 
                value={this.state.nameInput} 
                onChange={this.handleChange}
                required></input>
              </div>
              <div className="form-group">
                <input 
                type="email" 
                className="form-control" 
                name="emailInput" 
                placeholder="Email" 
                value={this.state.emailInput} 
                onChange={this.handleChange}
                required></input>
              </div>
              <div className="form-group">
                <input 
                type="number" 
                className="form-control"
                name="ageInput" 
                placeholder="Age" 
                value={this.state.ageInput} 
                onChange={this.handleChange}
                required></input>
              </div>
              <hr></hr>
              <button 
              className="btn btn-primary btn-block" 
              type="submit" 
              onClick={this.handleSignupSubmit}>
              Sign Up</button>
            </form>
           </div>
          </Modal>
        </div>
      </div>
    </div>
    );
  }
}