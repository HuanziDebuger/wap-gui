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
        description: '轮播图片数组list',
        useMethod:`:list="list"`,
        toValue: '点击+查看',
        more:`list: Swiper.loop([
                    "./images/01.jpg",
                    "./images/02.jpg",
                    "./images/03.jpg",                    
                    "./images/04.jpg",
                ])`,
        toDefault:'无'
        }, 
    {
        key:'2',
        param: ':options',
        description:'轮播其他参数',
        useMethod:`:options="options"`,
        toValue:'点击+查看',
        more:`options: {
                    perSliders: 1,
                    autoPlay: false, 
                    loop: true,
                }`,
        toDefault:'无'
    },
    {
        key:'3',
        param: 'perSliders',
        description:'一次轮播的个数',
        useMethod:`perSliders: 1`,
        toValue:'无',
        toDefault:'1(目前支持1)'
    },
    {
        key:'4',
        param: 'autoPlay',
        description:'是否自动播放',
        useMethod:`autoPlay: false`,
        toValue:'无',
        toDefault:'false'
    },
    {
        key:'5',
        param: 'loop',
        description:'是否循环',
        useMethod:`loop: true`,
        toValue:'无',
        toDefault:'true'
    },
     {
        key:'6',
        param: '<Slider />',
        description:'轮播组件,与swiper搭配使用',
        useMethod:'点击+查看',
        toValue:'点击+查看',
        more:`<slider slot="slider"  v-for="item in list">
                    <img :src="item">
            </slider>`,
        toDefault:'无'
    },
    {
        key:'7',
        param: '<Pagination />',
        description:'分页',
        useMethod:'点击+查看',
        toValue:'点击+查看',
        more:`<Pagination slot="pagination"></Pagination>`,
        toDefault:'无'
    }],
    //代码调用数据
    codeHTML:{
        html:`
        /*首先引入组件库*/
        import {Swiper, Slider,Pagination} from 'gome-ui-kit';

        /*组件的源码的引入以及设置相关的参数*/
        <swiper :list="list" :options="options">
            //swiper 要配合slider一起使用
            <slider slot="slider"  v-for="item in list">
                    <img :src="item">
            </slider>
            <Pagination slot="pagination"></Pagination>
        </swiper>

        /*参数实例*/
        export default Vue.extend({
            components: {
                swiper: Swiper,
                slider: Slider,
                Pagination,
            },
            data () {
                return {
                    list: Swiper.loop([
                        "./images/01.jpg",
                        "./images/02.jpg",
                        "./images/03.jpg",                    
                        "./images/04.jpg",
                    ]),
                    options: {
                        perSliders: 1,
                        autoPlay: false, 
                        loop: true,
                    }
                }
            }
        })`
    }
}