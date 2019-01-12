import { Layout, Icon, Menu, Tooltip, Col, Badge, Avatar,Card, Row } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import logo from '../logo.svg';
import './../stetic/css/index.css'
const { Header } = Layout;


const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
/**
 * 顶部组件
 */
class TopComponent extends Component {
    constructor(props) {
        super()
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }
    state = {
        bell_class: "topICon",
        question_circle_class: "topICon",
        avatar_class: "topICon",
        global: "topICon",
        mymenu_class:"hidden-my-menu",
    };
    /**
     * 鼠标进入事件处理方法
     * @param {} icon 
     */
    handleMouseOver(icon) {
        if ("question-circle" === icon) {
            //说明
            this.setState({
                question_circle_class: "topICon-mose",
            })
        } else if ("bell" === icon) {
            //消息
            this.setState({
                bell_class: "topICon-mose",
            })

        } else if ("avatar" === icon) {
            //个人
            //消息
            this.setState({
                avatar_class: "topICon-mose",
                mymenu_class: "show-my-menu",
            })
        } else if ("global" === icon) {
            //全局
            //消息
            this.setState({
                global: "topICon-mose",
            })
        }
    }
    /**
     * 鼠标移出事件
     * @param {} icon 
     */
    handleMouseOut(icon) {
        if ("question-circle" === icon) {
            //说明
            this.setState({
                question_circle_class: "topICon",
            })
        } else if ("bell" === icon) {
            //消息
            this.setState({
                bell_class: "topICon",
            })

        } else if ("avatar" === icon) {
            //个人
            //消息
            this.setState({
                avatar_class: "topICon",
                //mymenu_class: "hidden-my-menu",
            })
        } else if ("global" === icon) {
            //全局
            //消息
            this.setState({
                global: "topICon",
            })
        }
    }
    render() {
        return (
            <Header style={{ background: '#f5f5f5', padding: 0 }}>
                <Col xs={3} md={1} style={{ height: "64px" }} id="headbutom">
                    <span style={{ color: '#000', paddingLeft: '2%', fontSize: '1.4em' }}>
                        <Icon
                            className="trigger"
                            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.props.buttomoclock}
                            style={{ cursor: 'pointer' }}
                        />
                    </span>
                </Col>
                <Col xs={0} md={9} style={{ height: "64px" }} >
                    <span style={{ color: '#000', paddingLeft: '2%', fontSize: '1.4em' }}>
                        Information Management System</span>
                </Col>
                <Col xs={21} md={14} style={{ height: "64px" }} >
                    <Col xs={7} md={12} style={{ height: "64px" }}></Col>
                    <Col xs={3} md={2} className="topICon" >
                        <Icon
                            type="search"
                        />
                    </Col>
                    <Tooltip placement="bottom" title="使用说明">
                        <Col xs={3} md={2} className={this.state.question_circle_class}
                            onMouseOver={
                                //给方法传参
                                () => this.handleMouseOver("question-circle")}
                            onMouseOut={() => this.handleMouseOut("question-circle")}>
                            <Icon type="question-circle" />
                        </Col>
                    </Tooltip>
                    <Col xs={3} md={2} className={this.state.bell_class}
                        onMouseOver={
                            //给方法传参
                            () => this.handleMouseOver("bell")}
                        onMouseOut={() => this.handleMouseOut("bell")}
                    >
                        <Badge count={2}>
                            <Icon type="bell" />
                        </Badge>
                    </Col>
                    <Col xs={5} md={4} className={this.state.avatar_class}
                        onMouseOver={
                            //给方法传参
                            () => this.handleMouseOver("avatar")}
                        onMouseOut={() => this.handleMouseOut("avatar")}
                        style={{ marginTop: "0px", fontSize: "14px" }} >
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <span>Serati Ma</span>
                    </Col>
                    <Col xs={3} md={2} className={this.state.global}
                        onMouseOver={
                            //给方法传参
                            () => this.handleMouseOver("global")}
                        onMouseOut={() => this.handleMouseOut("global")}>
                        <Icon type="global" />
                    </Col>
                </Col>
                <Row className={this.state.mymenu_class}>
                    <Col xs={0} md={10} >
                        
                    </Col>
                    <Col xs={24} md={14} >
                        <Col xs={0} md={16}>
                        </Col>
                        <Col xs={24} md={6} style={{ border: "1px solid #e8e8e8", height: 160, borderRadius: 6, backgroundColor:"rgb(245, 245, 245)"}}>
                            <ul style={{ width: "100%", listStyle: "none", paddingLeft: "0px",borderRadius:6,lineHeight:5}}>
                                <li className="my-menu-item"></li>
                                <li className="my-menu-item"></li>
                                <li className="my-menu-item"></li>
                                <li className="my-menu-item"></li>
                            </ul>
                        </Col>
                        <Col xs={0} md={2}></Col>
                    </Col>
                </Row>
            </Header>
        );
    }
}

export default TopComponent;
