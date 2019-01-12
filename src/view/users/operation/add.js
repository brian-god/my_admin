import React from 'react';
import fetch from 'cross-fetch'
import { Form, Input, Radio, DatePicker, message, Checkbox, Button, Modal } from 'antd';
class AddUserFrom extends React.Component {
    render() {

        return (
            <Modal
                title="新增用户"
                visible={this.props.visible}
                onCancel={this.props.onCancel}
                footer={null}
                width={700}
            >
                <WrappedRegistrationForm
                    onCancel={this.props.onCancel}
                />
            </Modal>
        );
    }
}
const RadioGroup = Radio.Group;
class RegistrationForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                //没有错误关闭
                //this.props.onCancel()
                //console.log('Received values of form: ', values);
            }
        });
        const fromvalues = this.props.form.getFieldsValue();

        //fromvalues.push("sex"=this.state.value)
        console.log(JSON.stringify(fromvalues));
        //发送请求
        this.add(JSON.stringify(fromvalues))
    }
     add(fromvalue) {
        fetch('http://127.0.0.1:8080/insertUser', {
            method: 'post',//改成post
            mode: 'no-cors',//跨域
            headers: {//请求头
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: fromvalue//向服务器发送的数据
        }).then(res => {
            message.success("新增用户成功");
            this.props.onCancel()
        })
        .catch(json => { 
            message.error("保存用户出错！！");
            //没有错误关闭
            this.props.onCancel()
         })/*.then(response => response.json())
            .then(result => {
                message.success("新增用户成功");
                // 在此处写获取数据之后的处理逻辑
                let date = result.data
                let json = JSON.parse(date);
                console.log(json);
            }).catch(e =>{
            message.error("保存用户出错！！");
            //没有错误关闭
            this.props.onCancel()
        });*/
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        value: 1,
        fromvaluse: '',
    };
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    //密码校验
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次输入的密码不一致');
        } else {
            callback();
        }
    }
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        //表中头部字体样式
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 5 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        }
        return (
            <Form
                //新增用户的form表单提交表单
                onSubmit={this.handleSubmit}>
                <Form.Item
                    //邮箱
                    {...formItemLayout}
                    label="昵称"
                >
                    {getFieldDecorator('nickname', {
                        rules: [{
                            type: 'string', message: '请输入正确的昵称',
                        }, {
                            required: true, message: '昵称不能为空',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    //邮箱
                    {...formItemLayout}
                    label="账号"
                >
                    {getFieldDecorator('username', {
                        rules: [{
                            type: 'string', message: '请输入正确的账号',
                        }, {
                            required: true, message: '账号不能为空',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    //邮箱
                    {...formItemLayout}
                    label="E-email"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: '请输入正确的E-mail!',
                        }, {
                            required: true, message: 'E-mail不能为空!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="密码"
                >
                    {getFieldDecorator('password', {
                        rules: [{
                            required: true, message: '密码不能为空！',
                        },
                        {
                            validator: this.validateToNextPassword,
                        }
                        ],
                    })(
                        <Input type="password" />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="确认密码"
                >
                    {getFieldDecorator('confirm', {
                        rules: [{
                            required: true, message: '请确认你的密码!',
                        }, {
                            validator: this.compareToFirstPassword,
                        }],
                    })(
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="生日"
                >
                    {getFieldDecorator('birthday', config)(
                        <DatePicker />
                    )}
                </Form.Item>
                <Form.Item
                    {...formItemLayout}
                    label="性别"
                >
                    {
                        getFieldDecorator('gender', {
                            rules: [{
                                required: true, message: '请选择性别',
                            }]
                        })(
                            <RadioGroup onChange={this.onChange} initialValue={this.state.value}>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </RadioGroup>
                        )
                    }
                </Form.Item>
                <Form.Item
                    //邮箱
                    {...formItemLayout}
                    label="手机号"
                >
                    {getFieldDecorator('mobile', {
                        rules: [{
                            type: 'string', message: '请输入正确的手机号！',
                        }, {
                            required: true, message: '手机号不能为空！',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    {getFieldDecorator('agreement', {
                        valuePropName: 'checked',
                    })(
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    )}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">提交</Button>
                </Form.Item>
            </Form>
        );
    }
}
//创建表单
const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default AddUserFrom

