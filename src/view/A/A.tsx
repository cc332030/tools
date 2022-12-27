import React, { useState } from 'react';

import TextArea from 'antd/es/input/TextArea';

import HttpSchemeEnum from "enums/HttpSchemeEnum";

import { classList } from 'utils/CssUtils';

import 'css/body.scss';
import 'css/card.scss';
import 'css/a-button.scss';

import styles from './A.module.scss';

function A() {

  const [value, setValue] = useState('');

  return (
    <div className={ 'body' }>
      <div className = { classList('card', styles.card) }>

        <TextArea
          className={ classList('textarea', styles.textarea) }
          placeholder='请输入链接'
          value={ value }
          onChange={ e => setValue(e.target.value) }
        />

        <a href={dealHref(value)}
          className={ aClassName(value) }
        >{ urlTypeText(value) }下载</a>

      </div>
    </div>
  );
}

function dealHref(href: string): string {
  if(!href) {
    return '#';
  }
  return decodeURIComponent(href);
}

function aClassName(href: string): string {
  const classes = ['a'];
  if(!href) {
    classes.push('disabled');
  }
  return classes.join(' ');
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
