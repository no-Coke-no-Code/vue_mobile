<template>
    <div class="wrapper">
        <div class="circle" v-show="ifshow">
            <router-link class="icon-back" tag="span" to="/"></router-link>
        </div>
        <div class="ranctangle" v-show="!ifshow" :style="opacityStyle">
            <router-link class="icon-back" to="/" tag="div"></router-link>
            <div>详细信息</div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data(){
        return{
            ifshow : true,
            opacityStyle : {
                opacity : 0,
            },
        }
    },
    methods:{
        scrolling(e){
            var e = window.event || e;
            const top = document.documentElement.scrollTop;
            if(top > 60)
            {
                this.ifshow = false;
                let opacity = top / 140;
                if(opacity > 1)
                {
                    opacity = 1;
                }
                this.opacityStyle.opacity = opacity;
            }
            else
            {
                this.ifshow = true;
            }
            console.log("scrolling");
        },
    },
    activated(){
        window.addEventListener("scroll",this.scrolling)
    },
    // 这里进行的是全局事件解绑，不然其它组件也会绑定了此事件
    deactivated(){
        window.removeEventListener("scroll",this.scrolling)
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";

.wrapper
{
    font-size: 16px;
    .circle
    {
        position: absolute;
        height: .8rem;
        width: .8rem;
        top: .2rem;
        left: .2rem;
        line-height: .8rem;
        border-radius: .4rem;
        background-color: rgba(0,0,0,.8);
        color: white;
        font-weight: bold;
        text-align: center;
    }
    .ranctangle
    {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: .8rem;
        line-height: .8rem;
        background-color: $backgroundColor;
        display: flex;
        div
        {
            color: white;
            &:first-of-type
            {
                position: absolute;
                top: 0;
                left: 0;
                padding: 0 .3rem;
            }
            &:nth-of-type(2)
            {
                flex: 1;
                text-align: center;
            }
        }
    }
}
</style>
