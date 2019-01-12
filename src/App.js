import React, { Component, } from 'react';
import { HashRouter } from 'react-router-dom'
import 'antd/dist/antd.css';
import IndexRouter from './router/indexrouter'
//首页
class App extends Component {
    render() {
        return (
            //漏油管理组件
            <HashRouter>
                <IndexRouter/>
            </HashRouter>
        );
    }
}

export default App;
