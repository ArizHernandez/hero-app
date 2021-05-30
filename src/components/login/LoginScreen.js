import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';
import './style.css'

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext( AuthContext );

  const handleClick = () => {

    const lastPath = localStorage.getItem('lastPath') || '/';

    dispatch({ 
      type: types.login, 
      payload: { 
        name: 'Ariz' 
      } 
    });

    history.replace( lastPath );
  }

  return (
    <div className="container login__page d-flex justify-content-center align-items-center">

      <div className="login__container rounded text-center text-white mx-auto p-3">
        <h1>Login</h1>
        <hr className="mt-2 mb-4"/>
        <button
          className="btn btn-primary mt-2"
          onClick={ handleClick }
        >
          Login
        </button>
      </div>
    </div>
  )
}
