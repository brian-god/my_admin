import { Layout, Icon} from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
const { Header} = Layout;
/**
 * 顶部组件
 */
class TopComponent extends Component {
    render() {
        return (
            <Header style={{ background: '#000', padding: 0 }}>
                <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                    <Icon
                        className="trigger"
                        type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.props.buttomoclock}
                        style={{ cursor: 'pointer' }}
                    />
                </span>
                <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>Information Management System</span>
                <span style={{ color: '#fff', float: 'right', paddingRight: '1%' }}>
                    <img src={logo} className="App-logo" alt="logo" />
                </span>
            </Header>
        );
    }
}

export default TopComponent;
