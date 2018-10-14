<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="page in pages" :key="page.id">
                <div class="icon" v-for="item in page" :key="item.id">
                    <a href="#" class="icon-img">
                        <img class="img" :src="item.src"/>
                    </a>
                    <p class="icon-text">{{item.text}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name:"HomeIcons",
    props:{
        iconLists : Array
    },
    data() {
      return {
        swiperOption: {
            pagination:".swiper-pagination",
            // loop:true,
            },
        iconsList:[
            {
                id:"001",
                src:require("@/assets/img/icons_img/icon1.png"),
                text:"门票售卖门票售卖门票售卖门票售卖门票售卖"
            },
            {
                id:"002",
                src:require("@/assets/img/icons_img/icon2.png"),
                text:"门票售卖"
            },
            {
                id:"003",
                src:require("@/assets/img/icons_img/icon3.png"),
                text:"门票售卖"
            },
            {
                id:"004",
                src:require("@/assets/img/icons_img/icon4.png"),
                text:"门票售卖"
            },
            {
                id:"005",
                src:require("@/assets/img/icons_img/icon5.png"),
                text:"门票售卖"
            },
            {
                id:"006",
                src:require("@/assets/img/icons_img/icon6.png"),
                text:"门票售卖"
            },
            {
                id:"007",
                src:require("@/assets/img/icons_img/icon7.png"),
                text:"门票售卖"
            },
            {
                id:"008",
                src:require("@/assets/img/icons_img/icon8.png"),
                text:"门票售卖"
            },
            {
                id:"009",
                src:require("@/assets/img/icons_img/icon8.png"),
                text:"门票售卖"
            }
            ],
        }
    },
    computed:{
        pages(){
            const pages = [];
            this.iconLists.forEach((item,index) => {
                var page = Math.floor(index / 8);
                if(!pages[page])
                {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/mixins.scss";

    .icons
    {
        font-size: 16px;
        height: 0;
        padding-bottom: 55%;
        overflow: hidden;
    }
    .icon
    {
        position: relative;
        float: left;
        width: 25%;
        padding-bottom: 25%;
        margin-bottom:0.2rem;
    }
    .icon-img
    {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0.44rem;
        text-align:center;
        display: block;
    }
    .img
    {
        height: 100%;
    }
    .icon-text
    {
        position: absolute;
        right: 0;
        left: 0;
        bottom: 0;
        height:0.44rem;
        line-height: 0.44rem;
        display: block;
        text-align: center;
        @include ellipsis;
    }

    .swiper-pagination,.swiper-pagination-bullets
    {
        bottom: -2px;
    }
</style>
