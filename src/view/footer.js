import { Layout } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
const { Footer, } = Layout;
/**
 * 底部组件
 */
class FooterComponent extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
                    </Footer>
        );
    }
}

export default FooterComponent;
