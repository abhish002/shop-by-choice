import React from 'react'
import './sign-in-and-sign-up.styles.scss'
import SignInPage from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

export default function SignInAndSignUpPage() {
  return (
    <div>
      <div className='sign-in-and-sign-up'>
        <SignInPage />
        <SignUp />
      </div>
    </div>
  )
}
