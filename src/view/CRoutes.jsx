import {BrowserRouter, Route, Routes} from "react-router-dom";
import DownloadProxy from "view/DownloadProxy";
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

export const AllRoutes = {
    "/": {
        name: '首页',
        view: <Home/>,
    },
    "/download-proxy": {
        name: '下载代理',
        view: <DownloadProxy/>
    },
    "/extract-url": {
        name: '提取URL',
        view: <ExtractUrl/>,
    },
    "*": {
        name: '404 页面',
        view: <NotFound/>,
        statusCode: 404
    },
}

export default function CRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {
                    Object.entries(AllRoutes).map(([path, data]) => (
                        <Route key={path} path={path} element={data.view}/>
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
};
