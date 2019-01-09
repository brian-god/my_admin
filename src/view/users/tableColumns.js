import React from 'react';
import { Tag } from 'antd'
//新增用户弹出表单
const columns = [{
    align: 'center',
    title: '昵称',
    dataIndex: 'nickname',
    key: 'nickname',
}, {
    align: 'center',
    title: '账号',
    dataIndex: 'username',
    key: 'username',
}, {
    align: 'center',
    title: '电子邮件',
    dataIndex: 'email',
    key: 'email',
}, {
    align: 'center',
    title: '电话',
    key: 'mobile',
    dataIndex: 'mobile',
}, {
    align: 'center',
    title: '性别',
    key: 'gender',
    dataIndex: 'gender',
    render: status => (
        <span>
            <Tag color={status === 1 ? "blue" : "pink"}>{status === 1 ? "男" : "女"}</Tag>
        </span>
    ),

}
    , {
    align: 'center',
    title: '生日',
    key: 'birthday',
    dataIndex: 'birthday',
}
    , {
    align: 'center',
    title: '状态',
    key: 'status',
    dataIndex: 'status',
    render: status => (
        <span>
            <Tag color={status === 0 ? "green" : "gray"}>{status === 0 ? "启用" : "禁用"}</Tag>
        </span>
    ),
}];
export default columns
