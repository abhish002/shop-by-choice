import React, { Component } from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

export default class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: ''
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert(`Passwords don't match!`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, { displayName });
      alert('Account created. You are now logged in!');
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
      });
    } catch (e) {
      this.setState({
        error: e.message
      });
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { displayName, email, password, confirmPassword, error } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput name='displayName' value={displayName} handleChange={this.handleChange} label='display name' type='text' />
          <FormInput name='email' value={email} handleChange={this.handleChange} label='email' type='email' />
          <FormInput name='password' value={password} handleChange={this.handleChange} label='password' type='password' />
          <FormInput name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label='confirm password' type='password' />
          <CustomButton type='submit'>sign up</CustomButton>
        </form>
        {error ? (<span className='error'>{error}</span>) : ''}
      </div>
    )
  }
}
