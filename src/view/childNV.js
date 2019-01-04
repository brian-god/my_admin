import { Layout, Breadcrumb, Icon } from 'antd';
import React, { Component, Content } from 'react';
import 'antd/dist/antd.css';
/**
 * 字导航
 */
class ChildNV extends Component {
    render() {
        return (
            <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}
export default ChildNV;