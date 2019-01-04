import React, { Component } from 'react';
import { Form, Input, Tooltip, Radio , DatePicker, Icon, Cascader, Select, Row, Col, Checkbox, Button, Option, AutoComplete, Modal } from 'antd';
class AddUserFrom extends React.Component {
    render() {
       
        return (
            <Modal
                title="新增用户"
                visible={this.props.visible}
                onOk={this.props.onOk}
                onCancel={this.props.onCancel}
                footer ={null}
                width={700}
            >
                <WrappedRegistrationForm
                />
            </Modal>
        );
    }
}
const RadioGroup = Radio.Group;
class RegistrationForm extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        const fromvalues = this.props.form.getFieldsValue();
        //fromvalues.push("sex"=this.state.value)
        console.log(fromvalues)
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        value: 1,
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
    render(){
        const { autoCompleteResult } = this.state;
        const residences = [{
            value: 'zhejiang',
            label: 'Zhejiang',
            children: [{
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [{
                    value: 'xihu',
                    label: 'West Lake',
                }],
            }],
        }, {
            value: 'jiangsu',
            label: 'Jiangsu',
            children: [{
                value: 'nanjing',
                label: 'Nanjing',
                children: [{
                    value: 'zhonghuamen',
                    label: 'Zhong Hua Men',
                }],
            }],
        }];
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
        return(
            <Form
                //新增用户的form表单提交表单
                onSubmit={this.handleSubmit}>
                <Form.Item
                    //邮箱
                    {...formItemLayout}
                    label="昵称"
                >
                    {getFieldDecorator('name', {
                        rules: [{
                            type: 'string', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
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
                    {getFieldDecorator('code', {
                        rules: [{
                            type: 'string', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
                        }],
                    })(
                        <Input />
                    )}
                </Form.Item>
                <Form.Item
                //邮箱
                    {...formItemLayout}
                    label="E-mail"
                >
                    {getFieldDecorator('email', {
                        rules: [{
                            type: 'email', message: 'The input is not valid E-mail!',
                        }, {
                            required: true, message: 'Please input your E-mail!',
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
                            required: true, message: 'Please confirm your password!',
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
                    {getFieldDecorator('date-picker', config)(
                        <DatePicker />
                    )}
                </Form.Item>   
                <Form.Item
                    {...formItemLayout}
                    label="性别"
                >
                    {
                        getFieldDecorator('sex', {
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
                    {...formItemLayout}
                    label="地址"
                >
                    {getFieldDecorator('residence', {
                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                        rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }],
                    })(
                        <Cascader options={residences} />
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

