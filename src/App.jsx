import { appRouteMap } from "./router/routeMap";
import { AuthProcessor } from "./router/AuthProcessor";
import { useSelector } from "react-redux";
import { RootPage } from "./pages/RootPage/RootPage";


export const App = () => {
   const {isAuth, token} = useSelector(store => store.auth)

   return (
      <>
         {isAuth
            ? <RootPage token={token}/>
            : <AuthProcessor routeMap={appRouteMap}/>
         }
      </>
   )
}