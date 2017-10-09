import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

// 引入Antd组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }    
    handleClick = (e) => {
        this.setState({
           current: e.key,
           openKeys: e.keyPath.slice(1),
        });
    }
    onToggle = (info) => {
        this.setState({
           openKeys: info.open ? info.keyPath : info.keyPath.slice(1),
        });
    }

    render() {
        return (
            <div id="leftMenu"> 
                <Menu onClick={this.handleClick}
                    style={{ width: 146 }}
                    openKeys={this.state.openKeys}
                    onOpen={this.onToggle}
                    onClose={this.onToggle}
                    selectedKeys={[this.state.current]}
                    theme="dark"
                    mode="inline">
                    <Menu.Item key="1">                    
                        <IndexLink to="/home"><span><Icon type="home" /><span>HOME</span></span></IndexLink>
                    </Menu.Item>    
                    <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>说明文档</span></span>}>
                        <Menu.Item key="1"><Link to="/gome-ui-kit">gome-ui-kit</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bars" /><span>工具集</span></span>}>
                        <Menu.Item key="1"><Link to="/tools">autopack</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/tools">自动部署</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/tools">自动化测试</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>开发教程</span></span>}>
                        <Menu.Item key="1"><Link to="/Webpack">Webpack</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/React">React</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/ES6">ES6</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/Node">Node+Express</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/TypeScript">TypeScript</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/coffeScript">coffeScript</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Link to="/last"><span><Icon type="mail" /><span>前端规范</span></span></Link>
                    </Menu.Item>
                </Menu>                 
            </div>                
        )
    }
}