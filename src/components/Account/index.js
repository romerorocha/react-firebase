import React from 'react';

// import { PasswordForgetForm } from '../PasswordForget';
// import PasswordChangeForm from '../PasswordChange';
import { withAuthUser, withAuthorization } from '../Session';

const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    {/* <PasswordForgetForm />
    <PasswordChangeForm /> */}
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(withAuthUser(AccountPage));
