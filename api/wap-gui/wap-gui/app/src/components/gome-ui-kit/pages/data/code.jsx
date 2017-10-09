//组件源代码
const code=`<template>
    <page>
        <cnav :title="'radio组件'" :next="'option'"></cnav>
        <section>
            </br>
            <p>你最喜欢的蔬菜是：</p>
            </br>
            <radio v-for="(item, index) in data" :source="data" :index="index"  @onClick="onRadioClick">
                <i slot="pre">·</i>
            </radio>
            </br>
            </br>
            <p>你的选择是：{{result}}</p>
            </br>
            </br>
        </section>
            </br>
            </br>
            </br>
            </br>
        <section>
            </br>
            <p>你最喜欢的运动是：</p>
            </br>
            <radio v-for="(item, index) in data2" :source="data2" :index="index" @onClick="onRadioClick">
                <i slot="pre">·</i>
            </radio>
            </br>
            </br>
            <p>你的选择是：{{result2}}</p>
            </br>
            </br>
        </section>
    </page>
</template>
<script>
    import Vue from 'vue';
    import {RadioItem, RadioMixin, Page} from 'gome-ui-kit';
    import Nav from '../widgets/nav.vue';
    export default Vue.extend({
        mixins: [RadioMixin],
        components: {
            radio  : RadioItem,
            cnav   : Nav,
            page   : Page,
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
                            content: '菠菜',
                            isActive: false,
                            isDisable:false
                        },
                        {
                            content: '不可选',
                            isActive: false,
                            isDisable:true
                        }
                    ],
                data2: [
                        {
                            content: '足球',
                            isActive: false,
                        },
                        {
                            content: '篮球',
                            isActive: true,
                        },
                        {
                            content: '排球',
                            isActive: false,
                        }
                    ]
            }
        },
        computed: {
            result () {
                let result = ''
                for(let i = 0; i < this.data.length; i++){
                    if(this.data[i].isActive){
                        result = this.data[i].content
                    }
                }
                return result;
            },
            result2 () {
                let result = ''
                for(let i = 0; i < this.data2.length; i++){
                    if(this.data2[i].isActive){
                        result = this.data2[i].content
                    }
                }
                return result;
            }
        },
        created () {
        }
    })
</script>
<style lang="less" scoped>
    .radio {
        &.active {
            color: #ef3030;
        }
        &.disable{
            color:#ccc;
            text-decoration:line-through;
        }
    }
    section {
        padding: .25rem;
    }
</style>`;
export default {
    code:code
}