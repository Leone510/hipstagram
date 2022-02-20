import { WrapperContainer } from "./components/WrapperContainer/WrapperContainer";
import { Login } from "./pages/Login/Login";
import { ConfirmMessage } from "./pages/Message/ConfirmMessage";
import { ErrorMessage } from "./pages/Message/ErrorMessage";
import { Registration } from "./pages/Registration/Registration";


export const App = () => {
  return (
    // <Login/>
    // <Registration/>
    // <ErrorMessage message="Message from reject here"/>
    <ConfirmMessage message="Registration confirm"/>
  );
}