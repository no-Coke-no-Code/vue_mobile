<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons v-if="iconList.length" :iconLists="iconList"></home-icons>
        <home-recommand :recommandLists="recommendList"></home-recommand>
        <home-weekend :weekendLists="weekendList"></home-weekend>
    </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader.vue";
import HomeSwiper from "@/components/Home/HomeSwiper.vue";
import HomeIcons from "@/components/Home/HomeIcons.vue";
import HomeRecommand from "@/components/Home/HomeRecommand.vue";
import HomeWeekend from "@/components/Home/HomeWeekend.vue";
import Axios from "axios";
import {mapState} from 'vuex';

export default {
    name:'Home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommand,
        HomeWeekend
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        this.getMessage();
        this.lastCity = this.city;
    },
    // keep-alive标签时的特殊钩子函数(页面切换时会调用)
    activated(){
        if(this.lastCity !== this.city)
        {
            this.lastCity = this.city;
            this.getMessage();
        }
    },
    data(){
        return{
            lastCity : '',
            swiperList : [],
            iconList : [],
            weekendList : [],
            recommendList : []
        }
    },
    methods:{
        getMessage(){
            Axios.get("/api/index.json?city=" + this.city).then((data) => {
                const datas = data.data;
                if(datas.ret)
                {
                    if(datas.data.swiperList)
                    {
                        this.swiperList = datas.data.swiperList;
                    }
                    if(datas.data.iconList)
                    {
                        this.iconList = datas.data.iconList;
                    }
                    if(datas.data.weekendList)
                    {
                        this.weekendList = datas.data.weekendList;
                    }
                    if(datas.data.recommendList)
                    {
                        this.recommendList = datas.data.recommendList;
                    }
                }
            });
        }
    }
}
</script>

<style scoped>

</style>

