import React from 'react'
import { Route, Redirect } from 'react-router'

export const PublicRoute = ({
  component: Component,
  isLoged,
  ...rest
}) => {

  return (
    <Route
      { ...rest }
      component={ ( props ) => (
        !isLoged 
        ? ( <Component { ...props }/> )
        : ( <Redirect to="/"/>)
      )}
    />
  )
}
