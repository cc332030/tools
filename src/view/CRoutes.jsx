import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExtractUrl from "view/ExtractUrl";
import Home from "view/Home";
import NotFound from "view/NotFound";

/**
 * <p>
 *   Description: CRoutes
 * </p>
 * @author c332030
 * @since 2024/4/24
 */
export default function CRoutes() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/extract-url" element={<ExtractUrl />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </BrowserRouter>
    );
};
