import React from "react";
import { Navigate } from "react-router";
import { Login } from '../pages/Login/Login';
import { ConfirmMessage } from '../pages/Message/ConfirmMessage';
import { ErrorMessage } from '../pages/Message/ErrorMessage';
import { Registration } from '../pages/Registration/Registration';
import { RootPage } from "../pages/RootPage/RootPage";

export const appRouteMap = {
   rootPage: {
      path: '/rootPage',
      component: <RootPage/>,
   },

   login: {
      path: '/login',
      component: <Login key="login"/>,
   },

   registration: {
      path: '/registration',
      component: [
         <Registration key="registration"/>
      ]
   },
   confirm: {
      path: '/confirm/:authMessage',
      component: [
         <ConfirmMessage key="message"/>
      ]
   },
   error: {
      path: '/error/:authMessage',
      component: [
         <ErrorMessage key="error"/>
      ]
   },

   default: {
      path: '*',
      component: <Navigate to='/rootPage'/>
   },

}