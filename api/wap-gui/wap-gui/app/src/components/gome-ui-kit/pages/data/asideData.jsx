export default {
    //API数据
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
        param: ':direction',
        description: '滑入的方向',
        useMethod: `:direction="'right'"(参数为string)`,
        toValue: '点击+查看',
        more:`:direction="'top/bottom/left/right'"`,
        toDefault:'right(默认右侧滑入)'
        }, 
    {
        key:'2',
        param: ':position',
        description:'组件位置的高度',
        useMethod: `:position="90"`,
        toValue:'无',
        toDefault:'90'
    }, 
    {
        key:'3',
        param: '@click',
        description:'事件行为',
        useMethod: `@clik="in(滑入)/out(滑出)"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'4',
        param: '@touchmove',
        description:'事件行为',
        useMethod:`@touchmove="out2"`,
        toValue:'无',
        toDefault:'无'
    },
    {
        key:'5',
        param: ':bgIsClick',
        description:'点击背景是否滑出',
        useMethod: `:bgIsClick="false"`,
        toValue:'点击+查看',
        more:`:bgIsClick="ture(不滑出)/false(滑出)"`,
        toDefault:'false'
    },
    {
        key:'6',
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
        import {Aside, Scroller,Button} from 'gome-ui-kit'

        /*组件的源码的引入以及设置相关的参数*/
        <Aside ref="asilder" :direction="'right'" :position="90" :bgIsClick="true">
            <Scroller :direction="'vertical'">
                aside里可以嵌套任何组件
            </Scroller>
        </Aside>

        /*组件滑入*/
        <Button @click.native="$refs.aslider.in()" class="default">
            滑入的用法：@click.native="$refs.aslider.in()"，可以在绑定在代码的任何地方调用
        </Button>

        /*组件滑出*/
        <Button @click.native="$refs.aslider.out()" class="default">
            滑出的用法：@click.native="$refs.aslider.out()"，可以在绑定在代码的任何地方调用
        </Button>`
    }
}