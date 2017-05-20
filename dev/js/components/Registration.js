import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { handleUserShow } from '../actions/userAction';
import Modal from 'react-bootstrap/lib/Modal'
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import { bindActionCreators } from 'redux';


const form = reduxForm({
  form: 'RegistrationForm',
  validate
});

const renderField = field => (
  <div>
    <input className="form-control"   {...field.input} />
    {field.touched && field.error && <div className="error">{field.error}</div>}
  </div>
);


class RegistrationForm extends Component {

  constructor(props) {
    super(props)
    this.close = this.close.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  close() {
    this.props.handleUserShow(false);
  }

  hideModal() {
    this.props.handleUserShow(false);
  }


  componentDidMount() {
    this.handleInitialize();
  }

  handleInitialize() {
    const initData = {
      "firstName": this.props.user.firstName,
      "lastName": this.props.user.lastName,
      "sex": this.props.user.sex,
      "email": this.props.user.userEmail,
      "phoneNumber": this.props.user.phoneNumber
    };

    this.props.initialize(initData);
  }

  handleFormSubmit(formProps) {
    this.props.submitFormAction(formProps);
  }


  render() {
    const { handleSubmit } = this.props;


    return (
      <div >
        <ButtonToolbar>

          <div className="fl_right">
            <ul className="nospace inline pushright">
              <li><i className="fa fa-user"></i> <a href="#" onClick={(event) => { this.props.handleUserShow(true) }} >Register&nbsp;&nbsp;</a></li>
            </ul>
          </div>

          <Modal
            show={this.props.user.show}
            onHide={this.hideModal}
            dialogClassName="custom-modal"
          >
            <Modal.Header closeButton className="wrapper row2">
              <Modal.Title id="contained-modal-title-lg">Please Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>

              <div class="form-group has-success has-feedback">
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <label class="control-label" for="firstName">First Name:</label>
                  <Field className="form-control" name="firstName" type="text" component={renderField} />
                  <label>Last Name:</label>
                  <Field className="form-control" name="lastName" type="text" component={renderField} />

                  <label>Gender:</label>
                  <Field name="sex" component="select">
                    <option></option>
                    <option name="Male">Male</option>
                    <option name="Female">Female</option>
                  </Field>

                  <label>Email:</label>
                  <Field className="form-control" name="email" type="email" component={renderField} />

                  <label>Phone:</label>
                  <Field className="form-control" name="phoneNumber" type="tel" component={renderField} />

                </form>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.register}>Register</Button>
            </Modal.Footer>
          </Modal>
        </ButtonToolbar>
      </div>


    )
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.firstName) {
    errors.firstName = 'Please enter a first name';
  }

  if (!formProps.lastName) {
    errors.lastName = 'Please enter a last name';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.phoneNumber) {
    errors.phoneNumber = 'Please enter a phone number'
  }

  return errors;
}

function mapStateToProps(state) {
  let newState = {
    user: state.user
  };
  newState.user.show == null ? false : true;
  return newState;
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return bindActionCreators({ handleUserShow: handleUserShow }, dispatch);
}



const Registration = connect(mapStateToProps, matchDispatchToProps)(form(RegistrationForm));

export default Registration;