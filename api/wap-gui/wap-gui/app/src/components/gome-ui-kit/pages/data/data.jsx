export default {
    tableHead:[{
        title: '参数',
        dataIndex: 'name',
        key: 'name'
    }, 
    {
        title: '说明',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '类型/赋值',
        dataIndex: 'address',
        key: 'address',
    }, 
    {
        title: '默认值',
        dataIndex: 'action',
        key: 'action'
    }],
    tableBody: [{
        name: ':source',
        age: '数据源',
        address: `data:[{content: '菠菜',isActive: ture,isDisable:false},...]`,
        action:'isActive: ture(默认第一个选中)'
        }, 
    {
        name: ':index',
        age:'数据的索引值',
        address: 'number/index',
        action:'无'
    }, 
    {
        name: '@onClick',
        age:'默认事件行为',
        address: 'fn/onRadioClick',
        action:'onRadioClick'
    },
    {
        name: 'isDisable',
        age:'置灰不可选状态',
        address: 'true(不可选)/false(可选)',
        action:'false'
    }]
}