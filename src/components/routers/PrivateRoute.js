import React from 'react'
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({ 
  component: Component,
  isLoged,
  ...rest
}) => {

  localStorage.setItem( 'lastPath', rest.location.pathname + rest.location.search );

  return (
    <Route { ...rest }
      component={ ( props ) => (
        isLoged 
        ? ( <Component { ...props }/> )
        : ( <Redirect to="/login"/> )
      )}
    />
  )
}

PrivateRoute.propTypes = {
  isLoged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}