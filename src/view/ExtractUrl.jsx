import {Input, List, Typography} from "antd";
import CCard from "component/CCard";
import React, {useState} from "react";

const { TextArea } = Input;

/**
 * <p>
 *   Description: ExtractUrl
 * </p>
 * @author c332030
 * @since 2024/4/24
 */
export default function ExtractUrl() {

    const [value, setValue] = useState('');

    return (
        <CCard>
            <TextArea
                className={ 'textarea' }
                style={{
                    minWidth: '25rem',
                    minHeight: '10rem',
                }}
                placeholder='请输入文本'
                value={ value }
                onChange={ e => setValue(e.target.value)}
            />
            <List
                bordered
                dataSource={[]}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
        </CCard>
    );
};
