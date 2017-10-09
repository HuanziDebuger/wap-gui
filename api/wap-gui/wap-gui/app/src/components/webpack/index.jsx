//webpack
import React from 'react';
import ReactDOM from 'react-dom';
//次文件可以解析markdown文件
import Markdown from 'react-markdown';
//引入md文件
import Mdfile from './webpack.md';

//引入页面数据
import pageData from './data.jsx'
//定义组件
function Content(props){
    let dataSource = props.data.cont;
    let list = dataSource.map((item)=>{
         let arr = item.desc;
         let wordsp = arr.map((obj)=>{
                return <p style={{'marginTop':'10px'}}><b>{obj.text}</b></p>
         })
         return <li style={{margin:'15px'}}>
                    <p style={{'fontSize':'20px',color:'#333'}}>{item.title}</p>
                    <div style={{'background':'#fff',margin:'15px 0',padding:'10px'}}>
                        <h3 style={{'fontSize':'16px',margin:'10px 0'}}>{item.subtitle}</h3>
                       {wordsp}
                    </div>
                    <p><img src={item.img} width="100%"/></p>
                </li>
    })
    return(
        <ul>{list}</ul>
    );
}


export default class Webpack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {        
        }        
    }
    render() {
        const data = pageData;
        return (
            <div>
                <Markdown source={Mdfile} />
                <Content data={data} />
            </div>
        )
    }       
}
