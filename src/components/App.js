import React, { Component } from 'react';
import './style.css';
import Form from './Form';
import auth from '../auth/auth.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailError: false,
      password: '',
      passwordError: false,
      resMsg: '',
      resError: false,
      isValidate: false
    };
  }

  onFieldChange(field, event) {
    const value = event.currentTarget.value;
    switch (field) {
      case 'email':
        this.setState({
          email: value,
          emailError: false
        });
        break;
      case 'password':
        this.setState({
          password: value,
          passwordError: false
        });
        break;
      default:
        break;
    }
  }

  formSubmit(event) {
    event.preventDefault();

    const {
      email,
      password
    } = this.state;

    if (!email) this.setState({emailError: true});

    if (!password) this.setState({passwordError: true});

    if (email && password) {
      auth(email, password)
        .then(res => {
          this.setState({
            resError: false,
            resMsg: res.msg,
            isValidate: true
          });
        })
        .catch(res => {
          this.setState({
            resError: true,
            resMsg: res.msg
          });
        });
    }
  }

  render() {

    let msg = this.state.resMsg;
    let style = this.state.resError ? 'error' : 'success';

    return (
      <div>
        <div className='box'>
          <div className={'box__alert ' + (msg && style) }>
            {msg}
          </div>
          {
          !this.state.isValidate &&
          <Form
            email={this.state.email}
            emailError={this.state.emailError}
            password={this.state.password}
            passwordError={this.state.passwordError}
            onFieldChange={this.onFieldChange.bind(this)}
            formSubmit={this.formSubmit.bind(this)}
          />
          }
        </div>
      </div>
    );
  }
}

export default App;
