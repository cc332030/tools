import { TextArea } from 'antd-mobile';
import React, { useState } from 'react';

import 'css/body.scss';
// import './A.module.scss';

function A() {

  const [value, setValue] = useState('')

  return (
    <div className={'body'}>
      <div style={{
        flex: 1
      }}>
        <TextArea
          placeholder='请输入链接'
          autoSize={{ minRows: 3, maxRows: 5 }}
          value={value}
          onChange={e => setValue(e)}
        />
      </div>
      <a href={value} className={'a'}>下载</a>
    </div>
  );
}

export default A;
