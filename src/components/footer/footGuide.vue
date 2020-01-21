<template>
    <div class='foot_guide'>
        <van-tabbar v-model="active" route="true"  active-color="#399EF6">
            <van-tabbar-item name="msite" icon="logistics" to="/msite" replace >{{$t('language.takeaway')}}</van-tabbar-item>
            <van-tabbar-item name="search" icon="description" to="/search" replace >{{$t('language.search')}}</van-tabbar-item>
            <van-tabbar-item name="order" icon="cart-o" to="/order" dot replace >{{$t('language.order')}}</van-tabbar-item>
            <van-tabbar-item name="vip" icon="gem-o" to="/vip" :info="vipMessage" replace >{{$t('language.vip')}}</van-tabbar-item>
            <van-tabbar-item name="profile" icon="user-o" to="/profile" replace >{{$t('language.own')}}</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
    	data(){
            return{
                active: 'msite'
            }
        },
        props:['vipMessage'],
        created(){
           
        },
        mounted(){
            
        },
        computed: {
            /* ...mapState([
                'geohash'
            ]), */
        },
        methods: {
        },

    }

</script>

<style lang="scss" scoped>
   

   
</style>
