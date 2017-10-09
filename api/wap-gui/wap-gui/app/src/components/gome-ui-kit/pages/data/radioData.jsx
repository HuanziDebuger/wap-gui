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
        param: ':source',
        description: '数据源',
        useMethod: ':soure="data"',
        toValue: '点击+查看',
        more:`data: [
                        {
                            content: '白菜',
                            isActive: true,
                            isDisable:false
                        },
                        {
                            content: '芹菜',
                            isActive: false,
                            isDisable:false
                        },
                        {
                            content: '菠菜',
                            isActive: false,
                            isDisable:false
                        },
                        {
                            content: '不可选',
                            isActive: false,
                            isDisable:true
                        }
                    ]`,
        toDefault:'isActive: ture(默认第一个选中)'
        }, 
    {
        key:'2',
        param: ':index',
        description:'数据的索引值',
        useMethod: ':index="index"',
        toValue:'index',
        toDefault:'无'
    }, 
    {
        key:'3',
        param: '@onClick',
        description:'默认事件行为',
        useMethod: '@onClick="onRadioClick"',
        toValue:'onRadioClick',
        toDefault:'onRadioClick'
    },
    {
        key:'4',
        param: 'funName',
        description:'自定义事件',
        useMethod: '@click.native="funName"',
        toValue:'点击+查看',
        more:`funName(){ do something}`,
        toDefault:'无'
    },
    {
        key:'5',
        param: 'isDisable',
        description:'置灰不可选状态',
        useMethod: ':isDisable="true"',
        toValue:'点击+查看',
        more:':isDisable="true(不可选)/false(可选)',
        toDefault:'false(可选)'
    },
    {
        key:'6',
        param: 'slot',
        description:'扩展插槽',
        useMethod: '<i slot="pre">·</i>',
        toValue:'点击+查看',
        more:'<i slot="pre">此处可以添加前置按钮样式</i>',
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {RadioItem, RadioMixin} from 'gome-ui-kit'

        /*组件的源码的引入以及设置相关的参数*/
        <radio v-for="(item, index) in data" 
        :source="data" 
        :index="index"  
        @onClick="onRadioClick"
        @click.native="yourClick">
            <i slot="pre">·</i>
        </radio>

        /*参数示例*/
        export default Vue.extend({
            mixins: [RadioMixin],
            components: {
                radio  : RadioItem,
            },
            data () {
                return {
                    data: [
                            {
                                content: '白菜',
                                isActive: true,
                                isDisable:false
                            },
                            {
                                content: '芹菜',
                                isActive: false,
                                isDisable:false
                            },
                            {
                                content: '不可选',
                                isActive: false,
                                isDisable:true
                            }
                            ...
                        ], 
                }
            },
        })`
    }
}