/**
* Sample React
* 作者：Hugo
*
* @format
* @flow
*index/:id 这里的ide表示参数
*url漏油器
*/
import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UserIndex from './../view/users/index'
import UserTeam from './../view/users/userteam/userteam'
import HomePage from './../view/home/index'
import App from './../view/users/operation/add'
/**
 * 管理页面漏油
 */
class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/index" exact render={() => (
                    <Redirect to="/index/home" />
                )} />
                <Route path="/index/home" component={HomePage} />
                <Route path="/index/user" component={UserIndex} />
                <Route path="/index/user_team" component={UserTeam} />
                <Route path="/index/adduser" component={App} />
            </Switch>
        )
    }
}
export default RouterIndex