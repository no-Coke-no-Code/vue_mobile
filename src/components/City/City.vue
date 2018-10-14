<template>
    <div class="wrapper">
        <city-header></city-header>
        <city-in-or-out @country="getCountry"></city-in-or-out>
        <city-search :allCities="AllCities"></city-search>
        <city-list :allCities="AllCities" :hotCities="HotCities" :letter="letter"></city-list>
        <city-alphabet :alphabet="Alpha" @chosen="getText"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from "@/components/City/CityHeader.vue";
import CityInOrOut from "@/components/City/CityInOrOut.vue";
import CitySearch from "@/components/City/CitySearch.vue";
import CityList from "@/components/City/CityList.vue";
import CityAlphabet from "@/components/City/CityAlphabet.vue";

import Axios from "axios";

export default {
    name:"City",
    components:{
        CityHeader,
        CityInOrOut,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    data(){
        return{
            HotCities : [],
            AllCities : {},
            Alpha : [],
            letter : "",
            inOrout : "",
        }
    },
    methods:{
        getCountry(data){
            this.inOrout = data;
        },
        getCities(){
            if(this.inOrout == "in")
            {
                Axios.get("/api/city.json").then((datas) => {
                if(datas.data.ret == true && datas.data.data)
                {
                    var data = datas.data   
                    this.HotCities = data.data.hotCities;
                    this.AllCities = data.data.cities;
                    var Alpha = [];
                    for(var x in this.AllCities)
                    {
                        Alpha.push(x);
                    }
                    this.Alpha = Alpha;
                }
                });
            }
            else
            {
                Axios.get("/api/city_outside.json").then((datas) => {
                    if(datas.data.ret == true && datas.data.data)
                    {
                        var data = datas.data   
                        this.HotCities = data.data.hotCities;
                        this.AllCities = data.data.cities;
                        var Alpha = [];
                        for(var x in this.AllCities)
                        {
                            Alpha.push(x);
                        }
                        this.Alpha = Alpha;
                    }
                });
            }
        },
        getText(data){
            this.letter = data;
        },
    },
    watch:{
        inOrout(){
            this.getCities();
        },
    },
    // mounted(){
    //     this.getCities();
    // },
}
</script>

<style lang="scss" scoped>
    .wrapper
    {
        overflow: hidden;
    }
</style>
