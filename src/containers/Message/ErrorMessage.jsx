import { Button } from "../../components/Button/Button"
import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ErrorMessage = ({href, message}) => {

   const buttons = [
      <Button key="error" href="#">Ok</Button>,
   ]

   return (
      <Modal >
         <Message error color="red" title="error" buttons={buttons}>
            {message}
         </Message>
      </Modal>
   )
}