<template>
    <div class="wrapper">
        <div v-for="item in list" :key="item.title" class="item">
            <div class="item-title">
                <span class="item-icon-ticket"></span>
                <span class="item-icon-title">{{item.title}}</span>
            </div>
            <div v-if="item.children" class="item-content">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailList',
    props:{
        list:{
            type:Array
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/assets/variable.scss";
.wrapper
{
    font-size: 16px;
    .item
    {
        line-height:.8rem;
        font-size: 18px;
        .item-title
        {
            .item-icon-ticket
            {
                display: inline-block;
                width: 25px;
                height:28px;
                background: url("../../assets/img/detail_img/detail.png") no-repeat;
                background-position: 0 -30px;
                background-size: 30px 225px;
                vertical-align: middle;
                margin-bottom: .1rem;
                margin-left: .4rem;
            }
            .item-icon-title
            {
                margin-left: .05rem;
            }
        }
        .item-content
        {
            padding-left: .5rem;
        }
    }
}
</style>
