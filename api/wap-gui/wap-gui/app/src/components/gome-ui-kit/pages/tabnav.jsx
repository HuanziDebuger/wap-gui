import React from 'react';
import {Table,Collapse,Card} from 'antd';
const Panel = Collapse.Panel;
//引入数据data
import compsData from './data/tabnavData.jsx';
//引入组件源码
import codeData from './data/code.jsx';

export default class Radio extends React.Component {
  render() {
      const href='http://10.58.56.93:8081/examples/#/tabnav';
      
      let pagesTop = {
          display:'flex',
          flexDirection:'row',
          marginBottom:'20px',
      }
      let textareaStyle ={
        width:'100%',
        height:'80%',
        border:'none',
        resize:'none',
        background:'#333',
        fontSize:'16px',
        color:'#0ffbe8'
    }
     
    return(
        <div className="content">
            <div style={pagesTop}>
              <Card title="组件展示" style={{marginRight:'20px'}}>
                <iframe style={{width:'350px',height:'600px'}}  src={href}></iframe>
              </Card>
              <Card title="API参数" style={{flex:1}}>
                <Table 
                columns={compsData.tableHead} 
                dataSource={compsData.tableBody}
                expandedRowRender={record => <p>{record.more}</p>}
                bordered />
              </Card>
            </div>
             <div className="codeBox">
               <Card title="代码调用示例" style={{width:'100%',marginBottom:'20px'}}>
                 <textarea style={textareaStyle} disabled="disabled">{compsData.codeHTML.html}</textarea>
               </Card>
                <Collapse bordered={false}>
                    <Panel header="在线调试" key="1" >
                        <p>待补充ing...</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
  }
}