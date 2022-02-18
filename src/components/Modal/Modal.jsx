import React from 'react';
import Title from "react-vanilla-tilt";
import styles from "./Modal.module.scss";

const tiltOptions = { 
   scale: 1, 
   max: 10, 
   speed: 200,
   glare: true,
   "max-glare": 1
}

export const Modal = ({children}) => {

   return (
      <Title className="tilt" options={tiltOptions}>
         <div className={styles.modal}>
            {children}
         </div>
      </Title>
   )
}