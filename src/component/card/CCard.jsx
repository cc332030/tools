import React from "react";
import {Card} from "antd";

import 'css/body.scss';
import './CCard.scss';

/**
 * <p>
 *   Description: Card
 * </p>
 * @author c332030
 * @since 2024/4/24
 */
export default function CCard({children}) {
    return (
        <div className={ 'body' }>
            <Card bordered={false} >
                {children}
            </Card>
        </div>
    );
};
