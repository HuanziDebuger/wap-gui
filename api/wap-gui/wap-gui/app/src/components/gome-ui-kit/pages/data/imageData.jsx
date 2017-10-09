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
        param: 'list',
        description: 'image数组list',
        useMethod:`v-for="image in list"`,
        toValue: '点击+查看',
        more:`list: [
                    './images/01.jpg',
                    './images/02.jpg',
                    './images/03.jpg',
                    './images/04.jpg',
                    './images/05.jpg',
                    './images/06.jpg',
                    './images/07.jpg',
                    './images/08.jpg',
                    './images/09.jpg',
                    ]`,
        toDefault:'无'
        }, 
    {
        key:'2',
        param: ':placeholder',
        description:'图片预占位',
        useMethod:`:placeholder="placeholder"`,
        toValue:`placeholder: require('../images/02.jpg')`,
        toDefault:'无'
    },
    {
        key:'3',
        param: ':src',
        description:'图片路径',
        useMethod:`:src="image"`,
        toValue:`v-for="image in list"`,
        toDefault:'无'
    }],
    //代码数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {CImage} from 'gome-ui-kit'

        /*调用源码的引入以及设置相关的参数*/
        <CImage v-for="image in list" :placeholder="placeholder" :src="image">
        </CImage>
        
        /*参数示例，只做参考*/
        data () {
            return {
                list: [
                    './images/01.jpg',
                    './images/02.jpg',
                    './images/03.jpg',
                    '...'
                    ],
                placeholder: require('../images/02.jpg')
            }
        }`
    }
}