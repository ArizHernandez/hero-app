import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { LoginScreen } from '../login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

  const { user: { isLoged } } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact 
            isLoged={ isLoged }
            path="/login" 
            component={ LoginScreen }
          />
          <PrivateRoute 
            path="/" 
            isLoged={ isLoged }
            component={ DashboardRoutes }
          />
        </Switch>
      </div>
    </Router>
  )
}
