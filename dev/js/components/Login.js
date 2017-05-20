import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleEmail, handlePassword, handleShow } from '../actions/loginAction'
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'


class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    //this.state = {show: false};
    this.close = this.close.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.showModal = this.showModal.bind(this);
    this.login = this.login.bind(this);
  }
  showModal() {

  }
  close() {
    this.props.handleShow(false);
  }

  hideModal() {
    this.props.handleShow(false);
  }

  render() {
    return (
      <div>
        <ButtonToolbar>

          <div className="fl_right">
            <ul className="nospace inline pushright">
              <li><i className="fa fa-sign-in"></i> <a href="#" onClick={(event) => { this.props.handleShow(true) }} >Login&nbsp;&nbsp;&nbsp;</a></li>
            </ul>
          </div>

          <Modal
            show={this.props.login.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton className="wrapper row2">
              <Modal.Title id="contained-modal-title-lg">Please Log in</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form className="form-horizontal" onSubmit={e => { e.preventDefault(); }} >
                <div className="form-group has-success " >
                  <label className="col-sm-2 control-label" htmlFor="Email"> Email </label>
                  <div className="col-sm-10">
                    <input id="Email" className="form-control" type="text" value={this.props.login.email} onChange={(event) => { this.props.handleEmail(event.target.value) }} placeholder="Email" />
                  </div>
                </div>
                <div className="form-group  has-success">
                  <label className="col-sm-2 control-label" htmlFor="Password"> Password  </label>
                  <div className="col-sm-10">
                    <input id="Password" className="form-control" type="Password" value={this.props.login.password} onChange={(event) => { this.props.handlePassword(event.target.value) }} placeholder="Password" />
                  </div>
                </div>
              </form>

            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.login}>Login</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      </div>
    );
  }

  login() {
    // Set up Feathers client side
    var email = this.props.login.email;
    var password = this.props.login.password;
    console.log(" email " + email + " password " + password);
    if (email == "") {
      return;
    }
    var app = feathers()
      .configure(feathers.rest(host).jquery(jQuery))
      .configure(feathers.hooks())
      .configure(feathers.authentication({ storage: window.localStorage }));
    // Authenticate. Normally you'd grab these from a login form rather than hard coding
    app.authenticate({
      type: 'local',
      'email': email,
      'password': password
    }).then(function (result) {
      console.log('Authenticated!', app.get('token'));
      // Check browser support
      if (typeof (Storage) !== "undefined") {
        // Store
        localStorage.setItem("token", "app.get('token')");
        token = app.get('token');

      } else {
        console.log("Sorry, your browser does not support Web Storage...");
      }
    }).catch(function (error) {
      console.error('Error authenticating!', error);
    });

  }

};



function mapLoginStateToProps(state) {
  let newLogin = {
    login: state.login
  };
  newLogin.login.show ==null ? false :true;
  return newLogin;
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchLoginDispatchToProps(dispatch) {
  return bindActionCreators({ handleEmail: handleEmail, handlePassword: handlePassword, handleShow: handleShow }, dispatch);
}

 const Login = connect(mapLoginStateToProps, matchLoginDispatchToProps)(LoginForm);

 export default Login;
