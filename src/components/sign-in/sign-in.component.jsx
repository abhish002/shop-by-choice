import React, { Component } from 'react'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component'
import CutomButton from '../custom-button/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);

      this.setState({
        email: '',
        password: ''
      });
    } catch (e) {
      console.log(e.message);
    }
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='sign-in__title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' label='email' handleChange={this.handleChange} value={this.state.email} type='email' required />
          <FormInput name='password' label='password' value={this.state.password} handleChange={this.handleChange} type='password' required />
          <div className='buttons-container'>
            <CutomButton type='submit'>SIGN IN</CutomButton>
            <CutomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CutomButton>
          </div>
        </form>

      </div>
    )
  }
}
