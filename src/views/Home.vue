<template>
	<div class="home">
		<section>
			<div class="circle"></div>
			<navigation />
			<project-description />
		</section>
	</div>
</template>

<script>
import Navigation from '@/components/app/Navigation.vue';
import ProjectDescription from '@/components/ProjectDescription.vue';

export default {
	name: 'Home',
	components: {
		Navigation,
		ProjectDescription
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
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
	background: #006db5;
	clip-path: circle(600px at right);
}

@media (max-width: 991px) {
	section {
		padding: 20px 20px 120px;
	}
	.circle {
		clip-path: circle(400px at center);
	}
}
</style>
