<template>
	<div id="app">
		<Home />
	</div>
</template>

<script>
import Home from '@/views/Home.vue';

export default {
	name: 'App',
	components: { Home }
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
