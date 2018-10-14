<template>
    <div class="wrapper" ref="wrapper" id="wrapper">
        <div>
            <div class="area">
                <div class="title">我的位置</div>
                <div class="content">
                    <button>{{this.$store.state.city}}</button>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="content">
                    <button v-for="item in this.hotCities" @click="change(item.name)">{{item.name}}</button>
                </div>
            </div>
            <div class="area number-area" v-for="(item,key) in allCities" :key="key">
                <div class="title" :ref="key" >{{key}}</div>
                <div class="item-list">
                    <div class="item" v-for="innerItem in item" :key="innerItem.id" @click="change(innerItem.name)">{{innerItem.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    name:"CityList",
    props:{
        allCities:Object,
        hotCities:Array,
        letter:String,
    },
    mounted(){
        // better-scroll会默认影响click事件的绑定的草泥马  弄了我这么久  我日
        var wrapper = document.getElementById("wrapper");
        console.log(wrapper);
        console.log(this.$refs.wrapper);
        this.scroll = new BScroll(this.$refs.wrapper,{click:true});
    },
    methods:{
        change(data){
            // this.$store.dispatch("changeCity",data);

            this.$store.commit('change',data);
            this.$router.push("/");
        },
    },
    watch:{
        letter(){
            const target = this.$refs[this.letter][0];
            this.scroll.scrollToElement(target);
        },
    },
}
</script>

<style lang="scss" scoped>
    .wrapper
    {
        font-size: 16px;
        // 可以直接设置overflow:scroll也可以得到效果,只是没有动画效果而已
        // overflow: scroll;
        overflow: hidden;
        position: absolute;
        top: 2.22rem;
        left: 0;
        right: 0;
        bottom: 0;
        .area
        {
            .title
            {
                color: #666;
                background-color: #eee;
                line-height: .6rem;
                padding-left: .2rem;
                font-weight: bold;
                font-size: .26rem;
                border-bottom: 1px solid #ccc;
                border-top: 1px solid #ccc;
                font-size: 18px;
            }
            .content
            {
                padding: .2rem;
                button
                {
                    padding: .05rem .6rem;
                    border-radius: .05rem;
                    outline: none;
                    background-color: #fff;
                    margin-right: .2rem;
                    margin-top: .1rem;
                    margin-bottom: .1rem;
                    border: 1px solid #ccc
                }
            }
            .item-list
            {
                .item
                {
                    padding-right:.2rem;
                    padding-left: .2rem;
                    border-bottom: 1px solid #ccc; 
                    line-height: .8rem;
                    font-size: 18px;
                    &:last-of-type
                    {
                        border-bottom: none;
                    }
                }
            }
        }
    }
</style>