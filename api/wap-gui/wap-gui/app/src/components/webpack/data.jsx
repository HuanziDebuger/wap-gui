//引入图片
import logo from './img/webpack.jpg'
import init from './img/init.png'
export default {
    cont:[{
            title:'webpack是什么',
            subtitle:'',
            desc:[{text:`官方自称：模块打包器,通俗的理解就是在 webpack 里，所有类型的文件都可以是模块，
            包括我们最常见的js、css、image、json 文件等等，通过 webpack 的各种loader（加载器），
            我们可以更高效地管理这些文件。`},
            {text:'webpack的优势：'},
            {text:'1. webpack 是以 commonJS 的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。'},
            {text:'2. 能被模块化的不仅仅是 JS 了。'},
            {text:'3. 开发便捷，能替代部分 grunt/gulp 的工作，比如打包、压缩混淆、图片转base64等。'},
            {text:'4. 扩展性强，插件机制完善，特别是支持 React 热插拔（见 react-hot-loader ）的功能让人眼前一亮。'},
            
            {text:`下面这幅图更好的解释了它的作用:`}
            ],
            img:logo
        },
        {
            title:'如何使用webpack',
            subtitle:'首先初始化一个项目',
            desc:[
                {text:`命令行：$ npm init`},
                {text:`然后一路回车即可，会生成一个package.json的文件，后续我们可以再来修改里面的具体内容`}
            ],

            img:init

        },
        
        
    ]
}