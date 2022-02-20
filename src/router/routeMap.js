import React from "react";
import { Navigate } from "react-router";
import { Login } from '../containers/Login/Login';
import { ConfirmMessage } from '../containers/Message/ConfirmMessage';
import { ErrorMessage } from '../containers/Message/ErrorMessage';
import { Registration } from '../containers/Registration/Registration';

export const appRouteMap = {
   login: {
      path: '/Login',
      component: <Login key="login"/>,
   },

   registration: {
      path: '/registration',
      component: [
         <Registration key="registration"/>
      ]
   },
   confirm: {
      path: '/confirm',
      component: [
         <ConfirmMessage key="confirm"/>
      ]
   },
   error: {
      path: '/error',
      component: [
         <ErrorMessage key="error"/>
      ]
   },

   default: {
      path: '*',
      component: <Navigate to='/login'/>
   },

}