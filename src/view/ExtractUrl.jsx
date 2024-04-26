import {Button, Input, List, message} from "antd";
import CCard from "component/CCard";
import Framework from "component/Framework";
import React, {useState} from "react";
import {copyToClipboard} from "utils/PageUtils";
import {extractUrl} from "utils/UrlUtils";

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

    const urls = extractUrl(value)

    const [messageApi, contextHolder] = message.useMessage();

    const copySuccess = () => {
        messageApi.info('复制成功!')
    };

    return (
        <Framework>
            {contextHolder}
            <CCard>
                <TextArea
                    className={ 'textarea' }
                    style={{
                        // minWidth: '17rem',
                        // width: '30vw',
                        minHeight: '10rem',
                        height: '30vh',
                    }}
                    placeholder='请输入文本'
                    value={ value }
                    onChange={ e => setValue(e.target.value)}
                />
                <List
                    bordered
                    style={{
                        marginTop: '1rem',
                        minWidth: '17rem',
                        width: '30vw',
                    }}
                    dataSource={urls}
                    renderItem={(url) => (
                        <List.Item
                            style={{
                                display: 'flex'
                            }}
                            actions={[
                                <Button
                                    type={"primary"}
                                    onClick={() => {
                                        copyToClipboard(url)
                                        copySuccess()
                                    }}
                                >复制</Button>
                            ]}
                        >
                            <a
                                href={url}
                                style={{
                                    flex: '1',
                                    display: 'inline-block',

                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',

                                    overflow: 'hidden'
                                }}
                            >{url}</a>
                        </List.Item>
                    )}
                />
            </CCard>
        </Framework>
    );
};
