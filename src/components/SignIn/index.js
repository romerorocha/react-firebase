import React from 'react-dom';
import { SignUpLink } from '../SignUp';
import SignInForm from './SignInForm';

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignUpLink />
  </div>
);

export default SignInPage;

export { SignInForm };
