export default {
    tableHead:[{
        title: '参数',
        dataIndex: 'param',
        key: 'param'
    }, 
    {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: '使用参考',
        dataIndex: 'useMethod',
        key: 'useMethod',
    }, 
    {
        title: '赋值参考',
        dataIndex: 'toValue',
        key: 'toValue',
    },
    {
        title: '默认值',
        dataIndex: 'toDefault',
        key: 'toDefault'
    }],
    tableBody: [{
        key:'1',
        param: '无参数',
        description: 'page组件',
        useMethod: '<page>...</page>',
        toValue: '点击+查看',
        more:`<page>可以在这里插入任何内容</page>`,
        toDefault:'无'
    }],
     //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Page} from 'gome-ui-kit'

        /*组件的源码的引入以及设置相关的参数*/
        <Page>
        //这里可以插入所有的组件
            <Scroller />
            <Button />
            <Aside />
            ...
        </Page>
        
        /*参数示例*/
        无...`
    }

}