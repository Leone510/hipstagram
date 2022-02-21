import { Message } from "../../components/Message/Message"
import { Modal } from "../../components/Modal/Modal"

export const ErrorMessage = ({href, message}) => {

   return (
      <Modal >
         <Message error href={href} title="error">
            {message}
         </Message>
      </Modal>
   )
}