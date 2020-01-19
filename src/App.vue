<template>
	<div>
		<transition name="transitionName" mode="out-in">
			<keep-alive>
			    <router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
    	</transition>
    	<transition name="transitionName" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
		<svg-icon></svg-icon>	
    </div>
</template>

<script>
	import svgIcon from './components/common/svg';
  	export default {
		  data:{
			  
				  transitionName: 'router-fade'
			  
		  },
    	components:{
            svgIcon
        },
  	}

</script>

<style lang="scss">
		@import './style/common';
		@import './style/icon';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
	/* .slide-left-enter, .slide-right-leave-active { 
	　　opacity: 0;
	　　-webkit-transform: translate(100%, 0);
	　　transform: translate(100%, 0) ;
 	} 
 .slide-left-leave-active, .slide-right-enter { 
 　　opacity: 0; 
　　-webkit-transform: translate(-100%, 0); 
　　transform: translate(-100%, 0); 
 	} */
</style>
