import {Input, List, Typography} from "antd";
import CCard from "component/CCard";
import Framework from "component/Framework";
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
        <Framework>
            <CCard>
                <TextArea
                    className={ 'textarea' }
                    style={{
                        minWidth: '17rem',
                        width: '30vw',
                        minHeight: '10rem',
                        height: '30vh',
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
        </Framework>
    );
};
