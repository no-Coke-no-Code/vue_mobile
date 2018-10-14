<template>
    <ul class="wrapper">
        <li v-for="item in this.alphabet" @click="getText">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        alphabet:Array
    },
    methods:{
        getText(e){
            var e = e?e:window.event;
            this.$emit("chosen",e.target.innerHTML);
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
    .wrapper
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 16px;
        position: absolute;
        right: 0;
        top: 1.72rem;
        bottom: 0;
        width: .5rem;
        li
        {
            text-align: center;
            color: $backgroundColor;
            line-height: .4rem;
        }
    }
</style>
