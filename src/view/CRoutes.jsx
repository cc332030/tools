import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExtractUrl from "view/ExtractUrl";
import Home from "view/Home";
import NotFound from "view/NotFound";
import Proxy from "view/Proxy";

/**
 * <p>
 *   Description: CRoutes
 * </p>
 * @author c332030
 * @since 2024/4/24
 */

export const allRoutes = {
    "/": <Home />,
    "/proxy": <Proxy />,
    "/extract-url": <ExtractUrl />,
    "*": <NotFound />,
}

export default function CRoutes() {
    return (
        <BrowserRouter>
          <Routes>
              {
                  Object.entries(allRoutes).map(([path, view]) => (
                      <Route path={path} element={view}/>
                  ))
              }
          </Routes>
        </BrowserRouter>
    );
};
