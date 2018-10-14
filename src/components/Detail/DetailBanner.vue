<template>
    <div class="wrapper">
        <div class="banner">
            <img :src="this.bannerImg" @click="showing"/>
            <div class="banner-info" @click="showing">
                <div class="banner-name">{{this.sightName}}</div>
                <div class="banner-imgNum"><span class="icon-search"></span>{{this.gallaryImgs.length}}</div>
            </div>
            <fade>
                <CommonGallery :swiperList="this.gallaryImgs" v-show="this.ifshowing" @noShowing="noShowing"></CommonGallery>
            </fade>
        </div>
    </div>
</template>

<script>
import CommonGallery from "common/gallery/Gallery.vue";
import fade from "common/transition/fade.vue";

export default {
    name:'DetailBanner',
    props:{
        sightName : {
            type : String,
        },
        gallaryImgs : {
            type : Array,
        },
        bannerImg : {
            type : String,
        },
    },
    components:{
        CommonGallery,
        fade
    },
        methods:{
        showing(){
            this.ifshowing = true;
        },
        noShowing(){
            this.ifshowing = false;
        },
    },
    data(){
        return{
            ifshowing:false,
            // imgList : [
            //     "http://img1.qunarzz.com/sight/p0/1508/87/d1daf173eb0238c1f81d76f4bf24f524.water.jpg_350x240_1d3a4a45.jpg",
            //     "http://img1.qunarzz.com/sight/p0/1508/88/f7ea2660ad98bee23c052ef05d51dd0e.water.jpg_350x240_3047c6a9.jpg",
            //     "http://img1.qunarzz.com/sight/p0/1507/68/4f9db7b2a2e4ded1b007a108323dd5c9.water.jpg_350x240_c9c93e84.jpg",
            // ],
        }
    },
}
</script>

<style lang="scss" scoped>
 .wrapper
    {
        font-size: 16px;
        .banner
        {
        height:0;
        padding-bottom: 55%;
        overflow: hidden;
        position: relative;
        img
        {
            width: 100%;
        }
        .banner-info
        {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            color: #fff;
            display: flex;
            line-height: .6rem;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
            .banner-name
            {
                flex: 1;
                margin-left: .5rem;
                font-size: 18px;
                font-weight: bold;
            }
            .banner-imgNum
            {
                display: inline-block;
                vertical-align: bottom;
                padding: 0 .3rem;
                line-height: .4rem;
                height: .4rem;
                border-radius: .3rem;
                background-color: rgba(0, 0, 0, .5);
                font-size: 14px;
                margin-top: .05rem;
                margin-right: .3rem;
            }
        }
        }
    }
</style>
