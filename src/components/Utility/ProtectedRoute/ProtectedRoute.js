import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoute({
  component: Component = null,
  children = null,
  ...props
}) {

  if (Component) {
    return (
      <Route>
        {
          props.isLoggedIn
            ? <Component { ...props } />
            : <Redirect to="/signin" />
        }
      </Route>
    );
  }

  return (
    <Route>
      {
        props.isLoggedIn
          ? children
          : <Redirect to="/signin" />
      }
    </Route>
  );
}
