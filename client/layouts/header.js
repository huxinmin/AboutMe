import React, { PureComponent } from 'react';
import { Menu, Input } from 'antd';

import './header.css';

const Search = Input.Search;

export default class GlobalHeader extends PureComponent {
  render() {
    return (
      <header>
        <div className="left">
          <div className="logo">Huxinmin's blog</div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">博客</Menu.Item>
            <Menu.Item key="3">作品</Menu.Item>
            <Menu.Item key="4">关于我</Menu.Item>
          </Menu>
        </div>
        <Search
          placeholder="输入您想要搜索的标题"
          onSearch={value => console.log(value)}
          style={{ float: 'right', width: 240, height: 26, marginTop: 14 }}
        />
      </header>
    );
  }
}
