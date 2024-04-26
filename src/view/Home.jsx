import {Card} from "antd";
import CFlex from "component/CFlex";
import Framework from "component/Framework";
import {AllRoutes} from "view/CRoutes";

/**
 * <p>
 *   Description: Home
 * </p>
 * @author c332030
 * @since 2024/4/24
 */

const paths = [
    "/download-proxy",
    "/extract-url",
]

export default function Home() {
    return (
        <Framework>
            <CFlex>
                {
                    paths.map(path => <>
                        <a
                            className={'a'}
                            href={path}
                        >
                            <Card
                                key={`home-${path}`}
                                style={{
                                    width: '10rem',
                                    height: '5rem',
                                }}
                            >
                                {AllRoutes[path].name}
                            </Card>
                        </a>
                    </>)
                }
            </CFlex>
        </Framework>
    );
};
