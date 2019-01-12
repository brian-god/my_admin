import { Layout } from 'antd';
import React, { Component, } from 'react';
import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import './../stetic/css/Navi.css'
//漏油器
import RouterIndex from './../router/index'
//左侧按钮
import Leftmenu from './../view/leftmenu'
//头部
import TopComponent from './../view/top'
//底部
import FooterComponent from './../view/footer'
//自导航
import ChildNV from './../view/childNV'
class SiderDemo extends Component {
    state = {
        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            //漏油管理组件
            <HashRouter>
                <Layout>
                    <Leftmenu
                        collapsed={this.state.collapsed}
                    />
                    <Layout>
                        <TopComponent
                            //按钮点击的方法向头部按传递
                            buttomoclock={this.toggle}
                            collapsed={this.state.collapsed}
                        />
                        <ChildNV />
                        <RouterIndex />
                        <FooterComponent />
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}

export default SiderDemo;
