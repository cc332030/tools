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

export const AllRoutes = {
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
                  Object.entries(AllRoutes).map(([path, view]) => (
                      <Route path={path} element={view}/>
                  ))
              }
          </Routes>
        </BrowserRouter>
    );
};
