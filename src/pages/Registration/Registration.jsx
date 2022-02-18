import { Form } from "../../components/Form/Form"
import { Modal } from "../../components/Modal/Modal"
import { LinkButton } from "../../components/LinkButton/LinkButton"
import { Button } from "../../components/Button/Button"

export const Registration = () => {

   const buttons = [
      <LinkButton href="#">To Login Form</LinkButton>,
      <LinkButton href="#">SEND</LinkButton>
   ]

   return (
      <div>
         <Modal>
            <Form page='registration' buttons={buttons}>
               {[
                  "Login",
                  "Email",
                  "Password"
               ]}
            </Form>
         </Modal>
      </div>
   )
}