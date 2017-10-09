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
        param: 'text',
        description: 'toast的文本内容',
        useMethod:`new Toast(text)`,
        toValue: '点击+查看',
        more:`new Toast('toast的文本内容')`,
        toDefault:'无'
        }, 
    {
        key:'2',
        param: 'Toast回调',
        description:'回调执行完之后的Toast',
        useMethod:`@click.native="funName"`,
        toValue:'点击+查看',
        more:`new Toast('toast等待回调').$on('destroy', () => {
                new Toast('前一个toast完成')
            });`,
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Button, Toast} from 'gome-ui-kit';

        /*组件的源码的引入以及设置相关的参数*/
        <Aside ref="asilder" :direction="'right'" :position="90" :bgIsClick="true">
            <Scroller :direction="'vertical'">
                aside里可以嵌套任何组件
            </Scroller>
        </Aside>

        /*Toast 触发*/
        <cbutton @click.native="onClick1" class="default reverse">
            点击弹出toast，内容为"toast"
        </cbutton>

        /*Toast 回调*/
        <cbutton @click.native="onClick2" class="default reverse">
            toast回调，toast完成后会自动弹出toast
        </cbutton>
        
        /*参数示例*/
        export default Vue.extend({
            components: {
                cbutton: Button,
            },
            methods: {
                onClick1 () {
                    new Toast('toast弹框弹框弹框弹框弹框弹框弹框弹框');
                },
                onClick2 () {
                    new Toast('toast等待回调').$on('destroy', () => {
                        new Toast('前一个toast完成')
                    });
                }
            }
        })`
    }
}