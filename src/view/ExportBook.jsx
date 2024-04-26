import {Button, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import CCard from "component/CCard";
import Framework from "component/Framework";
import React, {useState} from "react";
import {str2txt} from "utils/FileUtils";
import {checkUrl, getDomain} from "utils/UrlUtils";

/**
 * <p>
 *   Description: ExportBook
 * </p>
 * @author c332030
 * @since 2024/4/26
 */
export default function ExportBook() {

    const [value, setValue] = useState('https://www.hetushu.com/book/115/index.html');

    const [messageApi, contextHolder] = message.useMessage();

    const showInfo = (message) => {
        messageApi.info(message)
    };

    async function fetchUrl(url) {

        const response = await fetch(`https://tools.c332030.com/proxy?url=${url}`)

        if(!response.ok) {
            showInfo(response.statusText)
            return null
        }

        return await response.text()
    }

    async function exportBook(url) {

        const domain= getDomain(url)
        // console.debug('domain', domain);

        const html = await fetchUrl(url)
        // console.debug('html', html);
        if(!html) {
            return
        }

        const htmlElement = document.createElement('html')
        htmlElement.innerHTML = html

        const title = htmlElement.querySelector('h2')?.innerText

        const ddArr = htmlElement.querySelectorAll('#dir dd');
        // console.debug('ddArr', ddArr);

        let book = '';
        for (let dd of ddArr) {

            book += dd.innerText + '\n'

            const a = dd.querySelector('a');
            const aUrl = `${domain}${a.getAttribute('href')}`
            // console.debug('aUrl', aUrl);
            const aHtml = await fetchUrl(aUrl)

            const aHtmlElement = document.createElement('html')
            aHtmlElement.innerHTML = aHtml

            const contentElement = aHtmlElement.querySelector('#content')
            contentElement.querySelector('h2')?.remove()

            const content = contentElement.innerText
            // debugger
            book += content + '\n'

            break
        }

        str2txt(book, `${title}.txt`)

        // console.debug('book', book);

    }


    return (
        <Framework>
            {contextHolder}
            <CCard>

                <TextArea
                    className={'textarea'}
                    style={{
                        minWidth: '17rem',
                        width: '30vw',
                        minHeight: '10rem',
                        height: '30vh',
                    }}
                    placeholder='请输入链接'
                    value={value}
                    onChange={e => {
                        const url = e.target.value
                        setValue(url)
                    }}
                />

                <Button
                    type={"primary"}
                    disabled={!value || !checkUrl(value)}
                    style={{
                        marginTop: '1rem'
                    }}
                    onClick={() => exportBook(value)}
                >解析下载</Button>

            </CCard>
        </Framework>
    );
};
