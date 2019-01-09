import React, { Component} from 'react';
import { Table, Button, Icon, Modal} from 'antd';
import columns from './tableColumns'
import AddUserFrom from './operation/add'
import fetch from 'isomorphic-fetch';
//import axios from 'axios'
//按钮组
const ButtonGroup = Button.Group;
//对话框
const confirm = Modal.confirm;
class UserIndex extends Component{
    state = { 
        selectedRowKeys: [],
        visible: false ,
        data: null,
        ischenge : 0,
        disabled : true
    }
    /**
     * 构造函数
     * @param {} props 
     */
    constructor(props) {
        super(props);
        //调用请求方法
        this.loadingdata();
        //如需使用this则需要先声明一下，能够解决作用域的问题
        this.bachDelete=this.bachDelete.bind(this);
    }
    /**生命周期函数
   * 当state中的数据更新
   * 判断是否需要重新渲染
   */
    shouldComponentUpdate(nextProps, nextState) {
        //数据改变重新渲染
        if ( nextState.data !== this.state.data) {
            return true
        }
        if(this.state.visible!==nextState.visible){
            return true
        }
        if (this.state.disabled !== nextState.disabled) {
            return true
        }
        return false
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    /**
     * 关闭弹框
     */
    handleCancel = (e) => {
        this.setState({
            visible: false,
        });
        this.loadingdata()
    }
    //行选择触发
    onSelectChange = (selectedRowKeys) => {
        //改变删除按钮的状态
        if (selectedRowKeys.length>0){
            this.setState({ 
                selectedRowKeys:selectedRowKeys,
                disabled:false
            });
        }else{
            this.setState({
                disabled: true
            });
        }
    }
    //删除的方法
    bachDelete(){
        console.log("删除方法被点击")
        let seletdata  = this.state.selectedRowKeys
        if (seletdata.length > 0) {
            confirm({
            title: 'Are you sure delete this task?',
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
            console.log('OK');
            },
            onCancel() {
            console.log('Cancel');
            },
        });
        }
    }
     loadingdata() {
         fetch('http://127.0.0.1:8080/allUser')
            .then(response => response.json())
            .then(result => {
                // 在此处写获取数据之后的处理逻辑
                let date = result.data
                let json = JSON.parse(date);
                console.log(json);
                this.setState({
                    data: json,
                });
            }).catch(function (e) {
                console.log("fetch fail", JSON.stringify(e));
            });
    }
    render(){
        const rowSelection = {
            onChange: this.onSelectChange
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
                            <Button type="primary"
                                onClick={this.loadingdata}>
                                <Icon type="edit" />
                                修改
                            </Button>
                            <Button type="primary"
                                onClick={this.bachDelete}
                                disabled={this.state.disabled}>
                                <Icon type="delete" />
                               删除
                            </Button>
                        </ButtonGroup>
                    </div>
                    <Table rowKey="id" rowSelection={rowSelection} columns={columns} dataSource={this.state.data}/>
                </div>
                <AddUserFrom
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                />
            </div>
        );
    }
}
export default UserIndex;