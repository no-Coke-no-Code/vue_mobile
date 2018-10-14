<template>
    <div class="wrapper">
        <h3 class="title">周末推荐</h3>
        <ul class="itemList">
            <li class="item" v-for="item in weekendLists" :key="item.id">
                <a href="#">
                    <div class="item-pic">
                        <img class="item-pic-content" :src="item.src"/>
                    </div>
                    <div class="item-info">
                        <p class="item-title">{{item.title}}</p>
                        <p class="item-text">{{item.text}}</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:
        {
            weekendLists:Array
        },
    data(){
        return{
            recommandList:[
                {
                    id:"0001",
                    src:require("@/assets/img/weekend_img/weekEnd.jpg"),
                    title:"迪士尼",
                    text:"迪士尼是香港的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0002",
                    src:require("@/assets/img/weekend_img/weekEnd.jpg"),
                    title:"迪士尼",
                    text:"迪士尼是香港的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0003",
                    src:require("@/assets/img/weekend_img/weekEnd.jpg"),
                    title:"迪士尼",
                    text:"迪士尼是香港的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0004",
                    src:require("@/assets/img/weekend_img/weekEnd.jpg"),
                    title:"迪士尼",
                    text:"迪士尼是香港的四A级景区之一白云山是广州的四A级景区之一",
                }
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/mixins.scss";
    .wrapper
    {
        font-size: 16px;
        margin-top: 0.3rem;
    }

    .title
    {
        line-height: 0.8rem;
        text-indent: 0.2rem;
        background: #ccc;
    }

    a
    {
        text-decoration: none;
    }

    .item
    {
        a
        {
            padding-bottom: 0.5rem;
            display: block;
        }
        .item-pic
        {
            // width: 100%;
            .item-pic-content
            {
                width: 100%;
            }
        }
        .item-info
        {
            // flex: 1;
            padding: 0.1rem;
            min-width: 0;  //这里这个操作实在是不解啊（浮动布局下,子元素设置min-width为0,默认宽度则不会超出父元素高度）
            // overflow: hidden;
            .item-title
            {
                font-weight: bolder;
                font-size: 20px;
                line-height: 0.6rem;
                @include ellipsis();
                color: black;
            }
            .item-text
            {
                color: #666;
                line-height: 0.5rem;
                @include ellipsis();
            }
        }
    }
</style>

