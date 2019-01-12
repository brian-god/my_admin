import { Layout, Row, Col } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../../stetic/css/login.css'
import FooterComponent from './../footer'
import LoginForm from './form/LoginFrom'
const {
    Header, Content,
} = Layout;
/**
 * 左侧按钮组件
 */
class LoginPage extends Component {
    render() {
        return (
            <Layout>
                <Header></Header>
                <Content>
                    <Row className ="mian">
                        <Col xs={3} md={9} />
                        <Col xs={18} md={6}>
                            <Row className ="logintop"></Row>
                            <LoginForm />
                        </Col>
                        <Col xs={3} md={9}/>
                    </Row>,
                </Content>
                <FooterComponent />
            </Layout>
        );
    }
}

export default LoginPage;
