import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Preloader from '../Preloader';

export default function ProtectedRoute({
  path,
  authorizationState,
  children
}) {
  function render() {
    if (!authorizationState.tokenChecked) {
      return <Preloader />;
    } else if (authorizationState.isLoggedIn) {
      return (<> {children} </>);
    } else {
      return <Redirect to="/" />;
    }
  }

  return (
    <Route path={path} render={render} />
  );
}
