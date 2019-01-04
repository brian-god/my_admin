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
import App      from './../view/users/operation/add'
class RouterIndex extends Component {
    render() {
        return (
                <Switch>
                    <Route path="/" exact render={() => (
                    <Redirect to="/home" />
                    )} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/user" component={UserIndex} />
                    <Route path="/user_team" component={UserTeam} />
                <Route path="/adduser" component={App} />
                </Switch>
        )
    }
}
export default RouterIndex