import React from 'react';
import ReactDOM from 'react-dom';
import User from './userInfo.jsx';
import Sidebar from './Sidebar.jsx';
import Main from './main.jsx';

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');

// Animate.CSS样式 & font-awesome样式
// 居 然没有引用antd的样式文件
import 'animate.css/animate.min.css';
import '../../style/main.less';

// 配置整体组件
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let navStyle={
            width:'100%',
            height:'50px',
            background:'#20a0ff',
            fontSize:'25px',
            color:'#fff',
            position:'absolute',
            zIndex:10,
            lineHeight:'50px',
            paddingLeft:'10px',
            position:'relative'
            
        }
        return (
            <div>
                <div style={navStyle}>
                    <span>WAP-GUI</span>
                    <div style={{position:'absolute',top:'10px',right:'15px'}}><User /></div>
                </div>
                <Sidebar />
                <div id="rightWrap">
                      {this.props.children}  
                </div>
            </div>
        )
        
    }
    
}

