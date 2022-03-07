import { appRouteMap } from "./router/routeMap";
import { AuthProcessor } from "./router/AuthProcessor";

export const App = () => <AuthProcessor routeMap={appRouteMap}/>