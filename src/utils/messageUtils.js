/**
 * Created by chenjialin on 17/3/29.
 */


import  { Component } from 'react'
import {  Modal } from 'antd';
/**
 *JsonUitl的实现
 */
//对话框
const confirm = Modal.confirm;
class MessageUtils extends Component {

    /**
     *选则提示框
     *
     */
    static ChoiceAlert(title,content,onOk,onCancel) {
        return confirm({
            title: title,
            content: content,
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: onOk,
            onCancel:onCancel
        });
    }

}

export default MessageUtils;