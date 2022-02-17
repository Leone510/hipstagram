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

export const Modal = () => {

   return (
      <Title className="tilt" options={tiltOptions}>
         <div className={styles.modal}>
            <h1>TEST</h1>
         </div>
      </Title>
   )
}