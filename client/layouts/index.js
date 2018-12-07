import { Component } from 'react';
import { Layout, Icon, message } from 'antd';

import GlobalHeader from "./header";
import GlobalFooter from "./footer";
import './index.css';

const { Content, Header, Footer } = Layout;

class BasicLayout extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <Layout>
          <Header style={{ padding: 0, background: '#fff' }}>
            <GlobalHeader/>
          </Header>
          <Content style={{ margin: '24px 24px 0', height: '100%' }}>
            { children }
          </Content>
          <Footer>
            <GlobalFooter/>
          </Footer>
      </Layout>
    );
  }
}

export default BasicLayout;
