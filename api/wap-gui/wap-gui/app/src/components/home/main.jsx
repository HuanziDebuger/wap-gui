import React from 'react';


import Image from '../../images/welcome2.jpg';
import Smallimg from '../../images/last.jpg';

//定义ul组件
function ListItem(props){
    let liStyle={
        width:'22%', 
        height:'300px',
        background:'#fff',
        margin:'15px',
        textAlign:'center'
    }
  
    let Arr = props.liData;
    let list = Arr.map((item)=>
        <li style={liStyle}>
            <p>{item.text}</p>
            <img src={item.image.Smallimg} />
        </li>
   
    );
    return (
        <ul style={{display:'flex', flexFlow:'row nowrap',margin:'15px'}}>
            {list}
        </ul>
    );
}
export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            col:'#999'
        }        
    }

    render() {
        let colorStyle = {
            color:this.state.col,
            textAlign: 'center',
            fontSize: 70,
            width:'100%',
            margin: '0 auto'
        }
        
        let img = {
            //background:'#ccc',
            width:'100%',
            height:'200px',
        }
        const liData=[
            {
                text:'简介一',
                image:{Smallimg}
            },
            {
                text:'简介一',
                image:{Smallimg}
            },
            {
                text:'简介一',
                image:{Smallimg}
            },
            {
                text:'简介一',
                image:{Smallimg}
            }

        ]
        return (
            <div>
            <h2 className="rotateIn" id="welcome" style={colorStyle}>无线前端GUI</h2>
            <div><img src={Image} style={img} /></div>
            <ListItem  liData={liData} />
            </div>
        )
    }       
}