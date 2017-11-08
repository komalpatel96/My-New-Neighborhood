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

      emailInput: "",
      passwordInput: "",
      nameInput: "",
      ageInput: "",

      emailLogin: "",
      passwordLogin: "",

      user: null,
      loggedIn: false

    };
 
    this.openModal1 = this.openModal1.bind(this);
    this.afterOpenModal1 = this.afterOpenModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);

    this.openModal2 = this.openModal2.bind(this);
    this.afterOpenModal2 = this.afterOpenModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

    this.handleChange = this.handleChange.bind(this);

    this.handleSignupSubmit = this.handleSignupSubmit.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);

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
      email: this.state.emailInput,
      password: this.state.passwordInput,
      name: this.state.nameInput,
      age: this.state.ageInput
    })
    .then(response => {
      console.log(response)
      if (!response.data.errmsg) {
        console.log('User added.')
        this.setState({
          emailInput: "",
          passwordInput: "",
          nameInput: "",
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
    this.props._login(this.state.username, this.state.password)
    this.setState({
      loggedIn: true
    })
  }
 
  openModal1() {
    this.setState({modal1IsOpen: true});
  }

  openModal2() {
    this.setState({modal2IsOpen: true});
  }
 
  afterOpenModal1() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  afterOpenModal2() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }
 
  closeModal1() {
    this.setState({modal1IsOpen: false});
  }

  closeModal2() {
    this.setState({modal2IsOpen: false});
  }
 
  render() {
    return (
    <div className="container-fluid">
      <div className="container-nav">
        <Header user={this.state.user} />
        <div className="container-buttons">
          <a onClick={this.openModal1}> LOGIN </a>
          <a onClick={this.openModal2}>SIGN UP</a>
        </div>
          <div>
            
          <Modal
              isOpen={this.state.modal1IsOpen}
              onAfterOpen={this.afterOpenModal1}
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
                  name="emailLogin" 
                  placeholder="Email" 
                  value={this.state.emailLogin} 
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
              <a href="/auth/google">
              <img src={googleButton} alt="sign into Google Button" />
              </a>
            </div>
          </Modal>
          
          <Modal
              isOpen={this.state.modal2IsOpen}
              onAfterOpen={this.afterOpenModal2}
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