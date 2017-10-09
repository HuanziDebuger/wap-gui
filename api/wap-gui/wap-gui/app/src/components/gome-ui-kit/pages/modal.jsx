import React from 'react';
import {Table,Collapse,Card} from 'antd';
const Panel = Collapse.Panel;
//引入数据data
import compsData from './data/modalData.jsx';
//引入组件源码
import codeData from './data/code.jsx';

export default class Radio extends React.Component {
  render() {
      const href='http://10.58.56.93:8081/examples/#/modal';
      
      let pagesTop = {
          display:'flex',
          flexDirection:'row',
          marginBottom:'20px',
      }
      let textareaStyle ={
          width:'100%',
          height:'100%',
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
                <h4>常用模态框</h4>
                <Table 
                columns={compsData.tableHead} 
                dataSource={compsData.tableBody}
                expandedRowRender={record => <p>{record.more}</p>}
                bordered />
                <h4>模态框填充自定义html</h4>
                <Table 
                columns={compsData.tableHead} 
                dataSource={compsData.tableBody2}
                expandedRowRender={record => <p>{record.more}</p>}
                bordered />
                <h4>自定义modal作为局部组件</h4>
                <Table 
                columns={compsData.tableHead} 
                dataSource={compsData.tableBody2}
                expandedRowRender={record => <p>{record.more}</p>}
                bordered />
                <h4>自定义modal全局组件</h4>
                <Table 
                columns={compsData.tableHead} 
                dataSource={compsData.tableBody2}
                expandedRowRender={record => <p>{record.more}</p>}
                bordered />
              </Card>
            </div>
             <div className="codeBox">
               <Card title="代码调用示例" style={{width:'100%',marginBottom:'20px'}}>
                 <textarea style={textareaStyle} disabled="disabled">{compsData.codeHTML.html}</textarea>
               </Card>
                <Collapse bordered={false}>
                    <Panel header="查看源代码" key="1" >
                        <p>待补充ing...</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
  }
}