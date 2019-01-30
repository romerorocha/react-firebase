import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withAuthUser } from './index';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { firebase, history } = this.props;

      this.listener = firebase.auth.onAuthStateChanged(authUser => {
        if (!condition(authUser)) {
          history.push(ROUTES.SIGN_IN);
        }
      });
    }

    componentWillUnmount() {
      this.listener();
    }
    render() {
      const { authUser } = this.props;

      return condition(authUser) ? <Component {...this.props} /> : null;
    }
  }

  return compose(
    withRouter,
    withAuthUser,
    withFirebase
  )(WithAuthorization);
};

export default withAuthorization;
