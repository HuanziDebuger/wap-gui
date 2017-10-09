import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory();
//引入登录组件
import Login from './components/login/login.jsx';

// 引入单个页面（包括嵌套的子页面）
import Home from './components/home/home.jsx';
import Main from './components/home/main.jsx';
import GomeUiKit from './components/gome-ui-kit/index.jsx';
import Page from './components/gome-ui-kit/pages/page.jsx';
import Toast from './components/gome-ui-kit/pages/toast.jsx';
import Modal from './components/gome-ui-kit/pages/modal.jsx';
import Button from './components/gome-ui-kit/pages/button.jsx';
import Radio from './components/gome-ui-kit/pages/radio.jsx';
import Option from './components/gome-ui-kit/pages/option.jsx';
import Scroller from './components/gome-ui-kit/pages/scroller.jsx';
import Swiper from './components/gome-ui-kit/pages/swiper.jsx';
import Aside from './components/gome-ui-kit/pages/aside.jsx';
import Tabnav from './components/gome-ui-kit/pages/tabnav.jsx';
import Image from './components/gome-ui-kit/pages/image.jsx';
import Webpack from './components/webpack/index.jsx';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={history}>        
        <Route path="/login" component={Login} />
        {/*默认打开home主页*/}
        <Route path="/" component={Home}>
            <IndexRoute component={Main}/> 
        </Route>
          {/*所有的子路由模块往home里传递props参数，来渲染页面*/}
        <Route path="/home" component={Home}>
             <IndexRoute component={Main}/>
             <Route path="/gome-ui-kit" component={GomeUiKit} />
             <Route path="/Page" component={Page} />
             <Route path="/Toast" component={Toast} />
             <Route path="/Modal" component={Modal} />
             <Route path="/Button" component={Button} />
             <Route path="/Radio" component={Radio} />
             <Route path="/Option" component={Option} />
             <Route path="/Scroller" component={Scroller} />
             <Route path="/Swiper" component={Swiper} />
             <Route path="/Aside" component={Aside} />
             <Route path="/Tabnav" component={Tabnav} />
             <Route path="/Image" component={Image} />
             <Route path="/webpack" component={Webpack}/>
            
         </Route> 
    </Router>
    , document.querySelector('#init')
)