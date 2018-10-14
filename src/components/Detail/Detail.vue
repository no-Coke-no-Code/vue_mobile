<template>
    <div class="wrapper">
        <detail-banner :sightName="this.sightName" :gallaryImgs="this.gallaryImgs" :bannerImg="this.bannerImg"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :list="this.categoryList"></detail-list>
        </div>
    </div>
</template>

<script>
import DetailBanner from "@/components/Detail/DetailBanner.vue";
import DetailHeader from "@/components/Detail/DetailHeader.vue";
import DetailList from "@/components/Detail/DetailList.vue";
import axios from "axios";

export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data(){
        return{
            bannerImg : '',
            categoryList : [],
            gallaryImgs : [],
            sightName : '',
            // list : [
            //     {
            //         title:"成人票",
            //         children:[
            //             {
            //                 title:'成人票全票',
            //             },
            //             {
            //                 title:'成人票半票',
            //             },
            //         ],
            //     },
            //     {
            //         title:"学生票"
            //     },
            //     {
            //         title:"儿童票"
            //     },
            // ],
        }
    },
    methods:{
        getData(){
            axios.get("@/../static/detail.json",{
                params:{
                    id : this.$route.params.id
                }
            }).then((this.handleData));
        },
        handleData(data){
            const resData = data.data;
            if(resData.ret && resData.data)
            {
                this.bannerImg = resData.data.bannerImg;
                this.categoryList = resData.data.categoryList;
                this.gallaryImgs = resData.data.gallaryImgs;
                this.sightName = resData.data.sightName;
            }
        },
    },
    mounted(){
        this.getData();
    },
}
</script>

<style lang="scss" scoped>
    .content
    {
        height: 1200px;
        
    }
</style>
