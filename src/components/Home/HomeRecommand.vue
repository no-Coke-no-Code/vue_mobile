<template>
    <div class="wrapper">
        <h3 class="title">今日推荐</h3>
        <ul class="itemList">
            <router-link :to="'/detail/'+item.id" tag="li" class="item" v-for="item in recommandLists" :key="item.id">
                <img class="item-pic" :src="item.src"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-text">{{item.text}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommand',
    props:
        {
            recommandLists:Array
        },
    data(){
        return{
            recommandList:[
                {
                    id:"0001",
                    src:"http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg",
                    title:"白云山",
                    text:"白云山是广州的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0002",
                    src:"http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg",
                    title:"白云山",
                    text:"白云山是广州的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0003",
                    src:"http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg",
                    title:"白云山",
                    text:"白云山是广州的四A级景区之一白云山是广州的四A级景区之一",
                },
                {
                    id:"0004",
                    src:"http://img1.qunarzz.com/sight/p0/1511/34/34170b200db08a5a90.img.jpg_200x200_cc3130fd.jpg",
                    title:"白云山",
                    text:"白云山是广州的四A级景区之一白云山是广州的四A级景区之一",
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

    .item
    {
        border-bottom: 1px solid #ccc;
        height: 1.9rem;
        display: flex;
        .item-pic
        {
            width: 1.7rem;
            height: 1.7rem;
            padding: 0.1rem;
        }
        .item-info
        {
            flex: 1;
            padding: 0.1rem;
            min-width: 0;  //这里这个操作实在是不解啊（浮动布局下,子元素设置min-width为0,默认宽度则不会超出父元素高度）
            // overflow: hidden;
            .item-title
            {
                font-weight: bolder;
                font-size: 20px;
                line-height: 0.6rem;
                @include ellipsis();
            }
            .item-text
            {
                color: #666;
                line-height: 0.5rem;
                @include ellipsis();
            }
            .item-button
            {
                background-color: lightgreen;
                width: 2rem;
                letter-spacing: 0.05rem;
                line-height: 0.5rem;
                border-radius: 3px;
                outline: none;
                font-weight: bold;
            }
        }
    }
    .item:last-of-type
    {
        border: none;
    }
</style>

