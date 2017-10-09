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
        param: ':list',
        description: 'tab数组list',
        useMethod:`:list="list"`,
        toValue: '点击+查看',
        more:`list: [
                    {
                        content: 'fafafaaf',
                        isActive: true
                    },
                    {
                        content: 'aafefe',
                        isActive: false
                    },
                    {
                        content: 'bbreberb',
                        isActive: false
                    }]`,
        toDefault:'无'
        }, 
    {
        key:'2',
        param: '@active',
        description:'当前选中事件',
        useMethod:`@active="onActive"`,
        toValue:'点击+查看',
        more:`onActive:function(index){
                this.iii = index(选中的索引值)
                this.fff = this.list[index].content(选中的内容)
            }`,
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
       import {TabNav} from 'gome-ui-kit';

        /*组件的源码的引入以及设置相关的参数*/
        <TabNav :list="list" @active="onActive"></TabNav>

        /*参数示例*/
        export default Vue.extend({
                components: {
                    TabNav: TabNav
                },
                data () {
                    return {
                        iii: 'null',
                        fff: 'null',
                        list: [
                            {
                                content: 'fafafaaf',
                                isActive: true
                            },
                            {
                                content: 'aafefe',
                                isActive: false
                            },
                            {
                                content: 'bbreberb',
                                isActive: false
                            },
                            ...
                        ],
                    }
                },
                methods:{
                    //获取当前索引值和tab内容
                    onActive:function(index){
                        this.iii = index
                        this.fff = this.list[index].content
                    }
                }
        })`
    }
}