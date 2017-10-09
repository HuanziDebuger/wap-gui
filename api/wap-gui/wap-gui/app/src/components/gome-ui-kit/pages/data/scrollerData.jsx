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
    tableBody: [
    {
        key:'1',
        param: '注意',
        description:'设置容器的高度',
        useMethod: 'height:100%',
        toValue:'无',
        toDefault:'无'
    }, 
    {
        key:'2',
        param: ':direction',
        description: '滑动的方向',
        useMethod: `:direction="horizontal"`,
        toValue: '点击+查看',
        more:`:direction="horizontal"(水平滑动)
              :direction="vertical"(垂直滑动)`,
        toDefault:'无'
    }, 
    {
        key:'3',
        param: '@touchstart',
        description:'事件行为',
        useMethod: `@touchstart ='touchstart'`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'4',
        param: '@touchmove',
        description:'事件行为',
        useMethod: `@touchmove ='touchmove'`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'5',
        param: '@touchend',
        description:'事件行为',
        useMethod: `@touchend ='touchend'`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'6',
        param: '@transitionEnd',
        description:'事件行为',
        useMethod: `@transitionEnd ='transitionEnd'`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'7',
        param: 'slot',
        description:'扩展插槽',
        useMethod: '<slot></slot>',
        toValue:'无',
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Scroller} from 'gome-ui-kit'

        /*组件的源码的引入以及设置相关的参数*/
        <scroller :direction="'vertical'">
            <p>scroller可以有横竖两个方向</p>
            <p>用手指上下滑动页面试试看</p>
            <p>要注意的是</p>
            <p>如果scroller在竖直模式时不是满屏的，需要一些附加类</p>
            <div>
                <div v-for="item in list">
                    <img :src="item">
                </div>
                <p>scroller可以嵌套</p>
                <p>下方是一个横向的scroller</p>
            </div>
        </scroller>

        /*参数示例*/
        export default Vue.extend({
            components: {
                scroller: Scroller
            },
            data () {
                return {
                    list: [
                        "./images/01.jpg",
                        "./images/02.jpg",
                        "./images/03.jpg",
                        ...
                    ]
                }
            },
        })`
    }
}