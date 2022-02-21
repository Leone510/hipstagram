import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ConfirmMessage = ({href, message}) => {

   return (
      <Modal >
         <Message href={href} title="confirm">
            {message}
         </Message>
      </Modal>
   )
}