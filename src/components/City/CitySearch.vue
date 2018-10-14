<template>
    <div class="wrapper">
        <div class="wrapper_son">
            <input v-model="searchContent" class="city-search" type="text" placeholder="输入城市名称"/>
        </div>
        <div class="wrapper_content" v-show="this.searchContent">
            <ul>
                <li class="search-item" v-for="item in list" @click="change(item)">{{item}}</li>
                <!-- 注意：在模板当中最好不要出现运算逻辑 -->
                <!-- 错误示范 -->
                <!-- <li class="search-item" v-show="!list.length">没有找到相应的数据</li> -->
                <!-- 正确示范：让逻辑都在script里头搞定 -->
                <li class="search-item" v-show="ifHasData">没有找到相应的数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
    name:"CitySearch",
    props:{
        allCities:Object,
    },
    data(){
        return{
            searchContent : "",
            list : [],
        }
    },
    computed:{
        ifHasData(){
            return !this.list.length;
        },
    },
    methods:{
        change(data){
            this.$store.commit("change",data);
            // this.searchContent = data;
            this.$router.push("/");
        },
    },
    watch:{
        searchContent(){
            setTimeout(() => {
                var result = [];
                for(var i in this.allCities)
                {
                    for(let x = 0;x<this.allCities[i].length;x++)
                    {
                                                                                            // 后面这里是输入首字母进行检索       
                        if(this.allCities[i][x].name.indexOf(this.searchContent) != -1 && this.allCities[i][x].name.indexOf(this.searchContent) == 0)
                        {
                            result.push(this.allCities[i][x].name);
                        }
                        if(this.allCities[i][x].spell.indexOf(this.searchContent) != -1 && this.allCities[i][x].spell.indexOf(this.searchContent) == 0)
                        {
                            result.push(this.allCities[i][x].name);
                        }
                    }
                }
                if(this.searchContent == "")
                {
                    result = [];
                }
                this.list = result;
            },100);
        },
    },
}
</script>

<style lang="scss" scoped>
    @import "@/assets/variable.scss";

    .wrapper
    {
        font-size: 16px;
        background-color: $backgroundColor;
        height: 0.86rem;
        width: 100%;
        display: table;
        .wrapper_son
        {
            display: table-cell;
            vertical-align: middle;
            text-align:center;
            .city-search
            {
                box-sizing: border-box;
                outline: none;
                font-size: 17px;
                border-radius: 5px;
                width: 95%;
                height:80%;
                padding-left: .2rem;
                padding-right: .2rem;
                text-align: center;
            }
        }
        .wrapper_content
        {
            position: absolute;
            z-index: 1;
            top: 2.22rem;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            overflow: scroll;
            ul
            {
                .search-item
                {
                    background-color: #fff;
                    line-height: .6rem;
                    border-bottom: 1px solid #666;
                    padding-left: .5rem;
                    padding-right: .5rem;
                    &:last-of-type
                    {
                        border: none;
                    }
                }
            }
        }
    }
</style>