//入口页面-组件目录
import React from 'react';
import { Link, IndexLink } from 'react-router';
import {Card} from 'antd';
// 引入各部分组件
import Page from './pages/page.jsx';
import Toast from './pages/toast.jsx';
import Modal from './pages/modal.jsx';
import Button from './pages/button.jsx';
import Radio from './pages/radio.jsx';
import Option from './pages/option.jsx';
import Scroller from './pages/scroller.jsx';
import Swiper from './pages/swiper.jsx';
import Aside from './pages/aside.jsx';
import Tabnav from './pages/tabnav.jsx';
import Image from './pages/image.jsx';

//定义一个list组件
function ListItem(props){
    let ulStyle = {
        width:'950px',
        margin:'0 auto',
        display:'flex',
        flexFlow:'row wrap',

    }
     let liStyle={
            width:'260',
            height:'200px',
            padding:'10px',
            margin:'10px',
            lineHeight:'200px',
            background:'#fff',
            border:'1px solid #ccc',
            textAlign:'center',
            fontSize:'20px'
        }
    let tabs = props.tabsData;
    let listItem = tabs.map((item)=>
        <li style={liStyle}>
            <Link to={item.link}>{item.val}</Link>
        </li>    
    );
    return (
        <ul style={ulStyle}>{listItem}</ul>
    );

}
export default class GomeUiKit extends React.Component {
    constructor(props){
        super(props)
        this.state={
            length:'8'
        }
    }
    render() {
        const tabsData =[
            {
                link:'/Page',
                val:'page(页面)组件'
            },
             {
                link:'/Toast',
                val:'toast(提示)组件',
            },
             {
                link:'/Modal',
                val:'modal(模态框)组件',
            },
             {
                link:'/Button',
                val:'button(按钮)组件',
            },
             {
                link:'/Radio',
                val:'radio(单选框)组件'
            },
            {
                link:'/Option',
                val:'option(复选框)组件'
            },
            {
                link:'/Scroller',
                val:'scroller(滑动容器)组件'
            },
            {
                link:'/Swiper',
                val:'swiper(轮播滑动容器)组件'
            },
            {
                link:'/Aside',
                val:'aside(侧滑容器)组件'
            },
            {
                link:'/Tabnav',
                val:'tabnav(tab切换)组件'
            },
            {
                link:'/Image',
                val:'image(图片)组件'
            },
        ]
        return (
            <div className="content">
                <ListItem  tabsData={tabsData}/>
            </div>
        )
    }    
}