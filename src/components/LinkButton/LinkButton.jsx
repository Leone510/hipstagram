import styles from "./LinkButton.module.scss";

export const LinkButton = ({children, ...props}) => {

   return (
      <a className={styles.link} {...props}>
         {children}
      </a>
   )
}