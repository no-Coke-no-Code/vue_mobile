<template>
    <div class="wrapper">
        <div class="container">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="item in swiperList" :key="item">
                    <img :src="item" class="swiper-img" @click="noShowing"/>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:"CommonGallery",
    props:{
        swiperList:{
            type:Array,
            default(){
                return [
                    "http://img1.qunarzz.com/sight/p0/1508/87/d1daf173eb0238c1f81d76f4bf24f524.water.jpg_350x240_1d3a4a45.jpg",
                    "http://img1.qunarzz.com/sight/p0/1508/88/f7ea2660ad98bee23c052ef05d51dd0e.water.jpg_350x240_3047c6a9.jpg",
                    "http://img1.qunarzz.com/sight/p0/1507/68/4f9db7b2a2e4ded1b007a108323dd5c9.water.jpg_350x240_c9c93e84.jpg",
                ];
            },
        }
    },
    methods:{
        noShowing(){
            this.$emit("noShowing");
        },
    },
    data(){
        return{
            swiperOption : {
                pagination : '.swiper-pagination',
                paginationType : 'fraction',
                observer:true,
                observeParents:true,
            },
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper
    {
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        .container
        {
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            img
            {
                width: 100%;
            }
            p
            {
                color:#fff;
            }
            .swiper-pagination
            {
                color: #fff;
                bottom: -1rem;
            }
        }
    }
    .swiper-container
    {
        overflow: initial;
    }
</style>
