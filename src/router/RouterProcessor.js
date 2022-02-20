import React from "react";
import { Routes, Route } from "react-router-dom";

export const RouterProcessor = ({routeMap}) => {

   return (
      <Routes>
         {
            Object.values(routeMap).map(({component, ...props}) => {
               return (
                  <Route key={props.path} path={props.path} element={component}/>
               )  
            })
         }
      </Routes>
   )
}