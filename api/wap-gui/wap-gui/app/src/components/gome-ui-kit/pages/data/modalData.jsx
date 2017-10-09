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
        param: 'data',
        description: 'modal的数据源',
        useMethod:'点击+查看',
        toValue: '点击+查看',
        more:`data = {
                title: '标题',
                content: '内容',
                hasClose: true(关闭按钮),
                ok: '确定按钮',
                cancel: '取消按钮',
            }`,
        toDefault:'无'
        }],
    tableBody2: [{
        key:'1',
        param: 'data',
        description: 'modal的数据源',
        useMethod:'点击+查看',
        toValue: '点击+查看',
        more:`data: {
                    htmlContent:"<ul>
                                        <li><span><</span>ul<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                        <li><span><</span>li<span>></span></li>
                                    </ul>" ,
                    ok: '确定',
                    cancel: '取消',
                }`,
        toDefault:'无'
        }, 
    {
        key:'2',
        param: 'htmlContent',
        description:'modal里填充的html',
        useMethod:'点击+查看',
        toValue:'点击+查看',
        more:`htmlContent:"<ul>
                <li><span><</span>ul<span>></span></li>
                <li><span><</span>li<span>></span></li>
                <li><span><</span>li<span>></span></li>
                <li><span><</span>li<span>></span></li>
                <li><span><</span>li<span>></span></li>
            </ul>"`,
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Modal,CModal} from 'gome-ui-kit'
        import CModal2 from './modal.custom.vue'

        /*组件的源码的引入以及设置相关的参数*/
       <cmodal :title="'title'" :ok="'ok'" :cancel="'cancel'" :show="cmodalShow" @ok="onModalClick" @cancel="onModalClick">
            <div slot="content" >
                <p>custom-slot-content</p>
                <p>do whatever you want</p>                
            </div>
        </cmodal>

        /*组件触发*/
        <Button @click.native="onClick1" class="default reverse">
            触发的用法：@click.native="onClick1"，可以在绑定在代码的任何地方调用
        </Button>
        
        /*参数示例，仅供参考*/
        modal数据太多，建议去组件库源码里查看
        `


        
    }
}