import React, {useRef, useState } from 'react';

import TextArea from 'antd/es/input/TextArea';

import HttpSchemeEnum from "enums/HttpSchemeEnum";

import { classList } from 'utils/CssUtils';

import 'css/body.scss';
import 'css/card.scss';
import 'css/a-button.scss';

import styles from './A.module.scss';
import {Button, Space } from 'antd';
import ReactUtils from "../../utils/ReactUtils";

function A() {

  const [value, setValue] = useState('');
  const decodeValue = !value ? '' : decodeURIComponent(value.trim());

  const aButton = useRef(null);

  return (
    <div className={ 'body' }>
      <div className = { classList('card', styles.card) }>

        <a ref={ aButton }
          className={ 'display-none' }
          href={ !decodeValue ? '#' : decodeValue }
        />

        <TextArea
          className={ classList('textarea', styles.textarea) }
          placeholder='请输入链接'
          value={ decodeValue }
          onChange={ e => setValue(e.target.value)}
        />

        <Space wrap
          size={ 'large' }
          align={ 'center' }
          style={{
            marginTop: '1rem'
          }}
        >
          <Button danger
            onClick={ () => setValue('') }
          >清空</Button>

          <Button type={ 'primary' }
            disabled={ !decodeValue }
            onClick={ () => ReactUtils.doHtmlElement(aButton, e => e.click())}
          >{ urlTypeText(decodeValue) }下载</Button>
        </Space>

      </div>
    </div>
  );
}

function getHttpScheme(href: string): string | null {

  if(href) {
    const index = href.indexOf(':');
    if(index > 0) {
      const type = href.substring(0, index);
      // @ts-ignore
      return HttpSchemeEnum[type];
    }
  }

  return null;
}

function urlTypeText(href: string): string {

  const httpScheme = getHttpScheme(href);
  if(!httpScheme) {
    return '';
  }
  return httpScheme + ' ';
}


export default A;
