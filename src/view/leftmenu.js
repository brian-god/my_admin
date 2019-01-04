import { Layout, Menu, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
//点击事件处理
import { Link } from 'react-router-dom'
const {Sider } = Layout;
const SubMenu = Menu.SubMenu
/**
 * 左侧按钮组件
 */
class LeftMenu extends Component {
    render() {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
            >
                <div className="logo" />
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="mobile" />
                        <span>MyApp</span>
                    </Menu.Item>
                    <SubMenu key="sub2" title={<span><Icon type="team" /><span>用户</span></span>}>
                        <Menu.Item key="5"><Link to="/user">用户</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/user_team">用户组</Link></Menu.Item>
                        <Menu.Item key="7"><Link to="/adduser">Option 7</Link></Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}

export default LeftMenu;
