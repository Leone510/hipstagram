import { Background } from "./components/Background/Background";
import { Modal } from "./components/Modal/Modal";
import { WrapperContainer } from "./components/WrapperContainer/WrapperContainer";
import { Registration } from "./pages/Registration/Registration";


export const App = () => {
  return (
    <WrapperContainer>
      <Background/>
      <Registration/>
    </WrapperContainer>
  );
}