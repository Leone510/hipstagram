// import { useState, useEffect } from "react";
import styles from "./ImageBox.module.scss";
// import { Preload } from "../Preload/Preload.jsx";

export const ImageBox = ({children, imgSrc}) => {
   // const [imageBg, setImageBg] = useState({
   //    src: process.env.PUBLIC_URL + "/img/404.jpg",
   //    preload: true,
   // })

   // useEffect(() => {
   //    const http = new XMLHttpRequest();
   //    http.open('HEAD', imgSrc, false);
   //    http.send();

   //    if (http.status === 404) {
   //       setImageBg({
   //          src: process.env.PUBLIC_URL + "/img/404.jpg",
   //          preload: false,
   //       })
   //    } else {
   //       setImageBg({
   //          src: imgSrc,
   //          preload: false,
   //       })
   //    }
   // }, [imgSrc]);
   
   return (
      <div className={styles.ImageBox}>
         {/* {
            imageBg.preload
               ? <Preload/>
               :  <img 
                     className={styles.img} 
                     src={imgSrc}
                     alt="" 
                  />
         } */}
         <img 
            className={styles.img} 
            src={imgSrc}
            alt="" 
         />
         {children}
      </div>
   )
}