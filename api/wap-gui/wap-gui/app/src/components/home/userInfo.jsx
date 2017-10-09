import React from 'react';
import createHistory from 'history/lib/createHashHistory';
import {Select} from 'antd';
const Option = Select.Option;
const history = createHistory();

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (v) => {
        if(v === '退出') {
            history.push('/login');
        }
    }
    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 25,
            borderBottom: '1px solid #ddd',
            paddingBottom: 20
        }
        return (
            <div style={logoutWrap}>
                <Select defaultValue="gome123" size="large" onChange={this.handleChange}>
                    <Option value="gome123">gome123</Option>
                    <Option value="退出">退出</Option>
                </Select>
            </div>
        );
    }
}

