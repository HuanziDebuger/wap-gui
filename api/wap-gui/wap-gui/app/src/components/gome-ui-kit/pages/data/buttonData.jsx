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
        param: 'default',
        description: '默认国美红',
        useMethod:`class="default"`,
        toValue: '无',
        toDefault:'无'
        }, 
    {
        key:'2',
        param: 'reverse',
        description:'默认反色',
        useMethod:`class="default reverse"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'3',
        param: 'disabled',
        description:'默认失效',
        useMethod:`class="default disabled"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'4',
        param: 'inline-block',
        description:'inline-block',
        useMethod:`class="default reverse"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'5',
        param: 'block',
        description:'block独占一行',
        useMethod:`class="default reverse block"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'6',
        param: 'inline',
        description:'inline行内',
        useMethod:`class="default reverse inline"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'7',
        param: 'custom',
        description:'自定义按钮样式',
        useMethod:`class="default custom"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'8',
        param: 'hover',
        description:'hover样式',
        useMethod:`:class="hover"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'9',
        param: ':href',
        description:'按钮链接',
        useMethod:`:href="http://m.gomeplus.com"`,
        toDefault:'无'
    }],
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Aside, Scroller,Button} from 'gome-ui-kit'

        /*组件的源码的引入以及设置相关的参数*/
        <Button class="default" :class="hover" :href="href">
            传入不同的class参数来设置button的样式
        </Button>
        
        /*参数示例*/
        无...`
    }
}