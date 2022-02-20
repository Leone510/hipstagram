import { appRouteMap } from "./router/routeMap";
import { RouterProcessor } from "./router/RouterProcessor";


export const App = () => <RouterProcessor routeMap={appRouteMap}/>