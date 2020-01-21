<template>
    <header id='head_top'>
        <slot name='logo'></slot>
        
        <slot name="message"></slot> <!-- 信息 -->
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <van-icon class="iconfont icon-fanhui"></van-icon>
        </section>
        <router-link :to="userInfo? '/profile':'/login'" v-if='signinUp' class="head_login">
            <!-- <svg class="user_avatar" v-if="userInfo">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
            </svg> -->
            <van-icon class="iconfont icon-huiyuan" v-if="userInfo"></van-icon>
            <span class="login_span" v-else>{{$t('language.login')}}/{{$t('language.register')}}</span>
        </router-link>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>
        <slot name='search'></slot> <!-- 搜索 -->
        <slot name="scan"></slot> <!-- 扫描 -->
        <slot name="set"></slot>  <!-- 设置 -->
        <slot name="edit"></slot>
        <slot name="msite-title"></slot>
        <slot name="changecity"></slot>
        <slot name="changeLogin"></slot>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();

        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
            ...mapState([
                'userInfo'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },

    }

</script>

<style lang="scss" scoped>
    @import '../../style/mixin';

    #head_top{
        background: -webkit-linear-gradient(left, yellow , blue); /* Safari 5.1 - 6.0 */  
        background: -o-linear-gradient(right, yellow, blue); /* Opera 11.1 - 12.0 */  
        background: -moz-linear-gradient(right, yellow, blue); /* Firefox 3.6 - 15 */  
        background: linear-gradient(to right, yellow , blue); /* 标准的语法 */
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        @include wh(100%, 1.95rem);
    }
    .head_goback{
        left: 0.4rem;
        @include wh(0.6rem);
        line-height: 2.2rem;
        margin-left: .4rem;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 40%;
        color: #000;
        text-align: center;
        .title_text{
            @include sc(0.8rem);
            text-align: center;
            font-weight: bold;
        }
    }
</style>
