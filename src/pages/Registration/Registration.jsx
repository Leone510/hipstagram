import { Form } from "../../components/Form/Form";
import { Modal } from "../../components/Modal/Modal";
import { LinkButton } from "../../components/LinkButton/LinkButton";

export const Registration = () => {

   const buttons = [
      <LinkButton key="toForm" href="#">To Login Form</LinkButton>,
      <LinkButton key="send" href="#">SEND</LinkButton>
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