<template>
    <div class="wrapper">
        <div class="btnGroup">
            <button :class="{buttonChosen:this.ifChosen}" @click="changing1">国内</button>
            <button :class="{buttonChosen:!this.ifChosen}" @click="changing2">国外/港澳台</button>
        </div>
    </div>
</template>

<script>
export default {
    name:"CityInOrOut",
    data(){
        return{
            ifChosen : true,
        }
    },
    mounted(){
        this.$emit("country","in");
    },
    methods:{
        changing1(){
            if(this.ifChosen)
            {
                return;
            }
            else
            {
                this.ifChosen = !this.ifChosen;
                this.$emit("country","in");
            }
        },
        changing2(){
            if(!this.ifChosen)
            {
                return;
            }
            else
            {
                this.ifChosen = !this.ifChosen;
                this.$emit("country","out");
            }
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/variable.scss";

    .wrapper
    {
        background-color: $backgroundColor;
        height: .5rem;
        line-height: .5rem;
        font-size: 16px;
        text-align: center;
        .btnGroup
        {
            display: inline-block;
            button
            {
                background-color: $backgroundColor;
                color: white;
                outline: none;
                border: 1px solid white;
            }
            .buttonChosen
            {
                background-color: white;
                color: $backgroundColor;
            }
        }
    }
</style>
