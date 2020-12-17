<template>
	<div class="home">
		<section>
			<div class="circle"></div>
			<app-navbar />
			<router-view />
		</section>
	</div>
</template>

<script>
import AppNavbar from './AppNavbar.vue';
export default {
	components: { AppNavbar },
	name: 'AppMain'
};
</script>

<style scoped>
section {
	position: relative;
	width: 100%;
	min-height: 100vh;
	padding: 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
}

.circle {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #c3323a;
	clip-path: circle(600px at right);
}

@media (max-width: 991px) {
	section {
		padding: 20px 20px 120px;
	}
	.circle {
		clip-path: circle(450px at center);
	}
}
</style>
