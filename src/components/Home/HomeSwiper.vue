<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img :src="item.src" class="swiper-img"/>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
 export default {
    name: 'HomeSwiper',
    props: {
        swiperList:Array
    },
    data() {
      return {
        swiperOption: {
            pagination:".swiper-pagination",
            loop:true,
        },

        // 踩坑了:在vue里面动态生成的路径无法被url-loader识别到
        // 解决方法一:可以把图片等资源放置到static目录下，这样就可以直接写路径
        // 解决方法二:可以先在变量里面先进行require
        // imgList:[{
        //     name:'qatar',
        //     src:require("../assets/img/swiper_img/swiper2.jpg"),
        // },
        // {
        //     name:'summer',
        //     src:require("../assets/img/swiper_img/swiper1.jpg"),
        // },
        // {
        //     name:'aborad',
        //     src:require("../assets/img/swiper_img/swiper3.jpg"),
        // }],
      }
    },
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    // },
    // mounted() {
    //   // current swiper instance
    //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
  }
</script>



<style lang="scss" scoped>
    // 这里应当有穿透选择器的样式改变,不但好像没有作用 
    // .wrapper >>> .swiper-pagination-bullet-active
    // {
    //     background: #fff !important;
    // }
    .swiper-img
    {
        width: 100%;
    }
</style>

