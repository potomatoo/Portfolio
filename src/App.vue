<template>
	<div id="app">
		<app-main />
	</div>
</template>

<script>
import AppMain from '@/components/app/AppMain.vue';

export default {
	name: 'App',
	components: {
		AppMain
	}
};
</script>

<style>
#app {
	font-family: 'Poppins', sans-serif;
	margin: 0;
	padding: 0;
	animation: fadein 2s;
	-webkit-animation: fadein 2s; /* Safari and Chrome */
}

@keyframes fadein {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
