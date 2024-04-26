import {Card} from "antd";

import React from "react";
import 'component/CCard.scss';

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
            <Card bordered={false}>
                {children}
            </Card>
        </div>
    );
};
