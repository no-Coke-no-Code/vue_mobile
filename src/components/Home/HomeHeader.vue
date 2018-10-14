<template>
    <div class="header">
        <div class="header-left"><span class="icon-back"></span></div>
        <div class="header-input"><span class="icon-search"></span><input type="text" placeholder="景点/城市/酒店"/></div>
        <router-link to="/city">
            <div class="header-right">{{this.$store.state.city}}<span class="icon-dropDown"></span></div>
        </router-link>
</div>
</template>

<script>
export default {
    name:"Header",                      
}
</script>

<style lang="scss" scoped>
    @import "@/assets/variable.scss";
    .header
    {
        line-height:0.86rem;
        display: flex;
        font-size: 16px;
        background-color: $backgroundColor;
        color: #fff;
        box-sizing: border-box;
        .header-left
        {
            width: 0.64rem;
            float: left;
            text-align: center;
        }
        .header-input
        {
            flex: 1;
            height: .64rem;
            line-height: .64rem;
            background-color: #fff;
            color: #666;
            border-radius: 0.1rem;
            margin-top: .12rem;
            margin-left: .2rem;
            font-size: 0;
            .icon-search
            {
                margin-right: 5px;
                margin-left: 5px;
            }
            input[type='text']
            {
                outline:none;
                border: none;
                font-size: 16px;
            }
        }
        .header-right
        {
            // 这里是因为中间那个input为flex：1，所以它会自适应来适应这部分的宽度变化
            min-width: 1.04rem;
            padding: 0 0.1rem;
            float: right;
            text-align: center;
        }
        a
        {
            color: white;
        }
    }

</style>

