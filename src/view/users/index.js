import React, { Component} from 'react';
import { Table, Button, Icon, message} from 'antd';
import columns from './tableColumns'
import AddUserFrom from './operation/add'
import fetch from 'isomorphic-fetch';
import MessageUtils from  './../../utils/messageUtils'
import axios from 'axios'
import qs from 'querystring'
//import axios from 'axios'
//按钮组
const ButtonGroup = Button.Group;
class UserIndex extends Component{
    state = { 
        selectedRowKeys: [],
        visible: false ,
        data: null,
        ischenge : 0,
        disabled : true,
        isloading: false
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
        //如需使用this则需要先声明一下，能够解决作用域的问题
        this.onOk = this.onOk.bind(this);
    }
    /**生命周期函数
   * 当state中的数据更新
   * 判断是否需要重新渲染
   */
    shouldComponentUpdate(nextProps, nextState) {
        //数据改变重新渲染
        if ( nextState.data !== this.state.data||null==this.state.data) {
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
    /**
     * 删除执行的方法
     */
    onOk() {
        //需要删除的数据x-www-form-urlencoded
        let keys = this.state.selectedRowKeys.join("-");
        axios.post('http://127.0.0.1:8080/bach_delete', qs.stringify({ "data": keys }), {
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            }
        }).then(res => {
            if(res.status===200){
                //let rstjson = JsonUtils.stringToJson(res.data)
                if(200===res.data["code"]){
                    message.success(res.data["message"])
                    //改变删除按钮的状态
                    this.setState({
                        disabled: true
                    })
                    //删除成功刷新界面
                    this.loadingdata()
                }else{
                    message.error(res.data["message"])
                }
            }else{
                message.error("请求出错");
            }
        }, err => {
            message.error("请求出错");
        })
    }
    onCancel() {
        message.warning("您取消了删除");
    }
    //删除的方法
    bachDelete(){
        let seletdata  = this.state.selectedRowKeys
        if (seletdata.length > 0) {
            MessageUtils.ChoiceAlert('Are you sure delete this task?',
                'Some descriptions',
                this.onOk,this.onCancel
            )      
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
                message.error("数据加载失败");
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
                                onClick={this.loadingdata}
                                disabled={this.state.disabled}>
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
                    <Table
                     rowKey="id" rowSelection={rowSelection} columns={columns} 
                     dataSource={this.state.data}
                     loading= {this.state.isloading}/>
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