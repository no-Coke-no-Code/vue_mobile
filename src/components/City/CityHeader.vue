<template>
    <div class="header">
        <!-- <span class="icon-back">&#xe624;</span> -->
        <router-link to="/">
            <span class="icon-back"></span>
        </router-link>
        <h3>城市选择</h3>
    </div>
</template>

<script>
export default {
    name:"CityHeader",
}
</script>

<style lang="scss" scoped>
    @import "@/assets/variable.scss";

    .header
    {
        height: .86rem;
        line-height: .86rem;
        text-align: center;
        font-size: 18px;
        background-color: $backgroundColor;
        color: #fff;
        position: relative;
        .icon-back
        {
            position: absolute;
            top: 0;
            left:0;
            width: 0.8rem;
            
        }
        a
        {
            color: white;
        }
    }
</style>
