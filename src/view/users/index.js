import React, { Component} from 'react';
import { Table, Divider, Tag, Button, Icon, Modal } from 'antd';
import data from './data'
import AddUserFrom from './operation/add'
//按钮组
const ButtonGroup = Button.Group;
//新增用户弹出表单
const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
}, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
        <span>
            {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
        </span>
    ),
}, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
        <span>
            <a href="javascript:;">Invite {record.name}</a>
            <Divider type="vertical" />
            <a href="javascript:;">Delete</a>
        </span>
    ),
}];
class UserIndex extends Component{
    state = { 
        selectedRowKeys: [],
        visible: false 
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log("确定按钮被点击");
        this.setState({
            visible: false,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    submeitfrom(usermessage){
        console.log(usermessage)
    }
    render(){
        const { selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return(
            <div style={{ padding: 24, background: '#fff', minHeight: 500 }}>
                <div>
                    <div className="table-operations">
                        <ButtonGroup>
                            <Button type="primary"
                                onClick={this.showModal} >
                                <Icon type="plus-circle" />新增
                            </Button>
                            <Button type="primary">
                                <Icon type="edit" />
                                修改
                            </Button>
                            <Button type="primary">
                                <Icon type="delete" />
                               删除
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                </div>
                <AddUserFrom
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                />
            </div>
        );
    }
}
export default UserIndex;