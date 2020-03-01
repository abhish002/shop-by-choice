import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CutomButton from '../custom-button/custom-button.component'

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

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2 className='sign-in__title'>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' label='EMAIL' handleChange={this.handleChange} value={this.state.email} type='email' required />
          <FormInput name='password' label='PASSWORD' value={this.state.password} handleChange={this.handleChange} type='password' required />
          <CutomButton type='submit'>SIGN IN</CutomButton>
        </form>
      </div>
    )
  }
}
