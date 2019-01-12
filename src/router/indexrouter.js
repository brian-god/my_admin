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
import SiderDemo from  './../Navi/Navi'
import LoginPage from  './../view/login/login'
/**
 * 系统默认漏油
 */
class IndexRouter extends Component {
    render() {
        //判断用户是否登陆
        let user = sessionStorage.getItem("user");
        //重定向地址
        var exact_path = null == user ? "/login" : "/index"
        //对管理界面控制
        return (
            <Switch>
                <Route path="/" exact render={() => (
                    <Redirect to={exact_path} />
                )} />
                <Route path="/index">
                    {
                        //校验用户是否登陆
                        null == user ? <Route exact render={() => (
                            <Redirect to="/login" />
                        )} />:<SiderDemo/>
                    }
                </Route>
                <Route path="/login" component={LoginPage} />
            </Switch>
        )
    }
}
export default IndexRouter