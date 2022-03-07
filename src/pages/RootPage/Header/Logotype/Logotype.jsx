import styles from "./Logotype.module.scss";

export const Logotype = () => {

   return (
      <div className={styles.logotype}>
         <div className={styles.imgBox}>
            <img 
            className={styles.img}
            src={process.env.PUBLIC_URL + '/img/logo.png'} 
            alt="logotype" 
            />
         </div>
        
         <p className={styles.logoTitle}>
            hipstagram
         </p>
      </div>
   )
}