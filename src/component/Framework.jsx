/**
 * <p>
 *   Description: Framework
 * </p>
 * @author c332030
 * @since 2024/4/26
 */

import 'css/body.scss';
import {Button, Space} from "antd";

import './Framework.scss'

export default function Framework({children}) {
    return (
        <div
            style={{

                height: '100vh',

                display: 'flex',
                flexDirection: 'column',

                overflow: 'hidden'

            }}
        >
            <Space
                className={'space-bar'}
            >
                <a href={'/'}>
                    <Button type="primary">回到首页</Button>
                </a>
            </Space>
            <div
                style={{
                    flex: '1'
                }}
            >
                {children}
            </div>
            <Space
                className={'space-bar'}
            >
                <a href={'#'}>
                    <Button type="primary">关于我们</Button>
                </a>
            </Space>
        </div>
    );
};
