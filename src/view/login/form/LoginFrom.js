import React from 'react'
import {
    Form, Icon, Input, Button, Checkbox,message
} from 'antd';
import fetch from 'cross-fetch'

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let jsonData = JSON.stringify(values)
                fetch('http://127.0.0.1:8080/login', {
                    method: 'post',//改成post
                    mode: 'no-cors',//跨域
                    headers: {//请求头
                        //'Content-Type': 'application/json',
                        //'Accept': 'application/json',
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: jsonData//向服务器发送的数据
                }).then(res => {
                    res.json().then(data=>{
                        //登陆成功
                        if(data["code"]===200){
                            // 将登陆用户储存到session中
                            sessionStorage.setItem("user", data["data"]);
                            console.log(data["data"])
                            message.success(data["message"])
                            //进行页面跳转
                            window.location.href="/"
                        }else{
                            message.error(data["message"])
                        }
                    });
                }).catch(json => {
                        message.error("登陆失败请求异常！！");
                    })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>自动登陆</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                        登陆
                    </Button>
                </Form.Item>
                <Form.Item>
                    <span>其他登陆方式</span>
                </Form.Item>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);


class LoginForm extends React.Component {
    render() {

        return (
            <div className="longfrom"><WrappedNormalLoginForm /></div>
        );
    }
}
export default LoginForm;