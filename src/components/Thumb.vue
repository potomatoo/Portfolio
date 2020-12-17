<template>
	<ul class="thumb">
		<li>
			<div
				@click="
					imgSlider({
						img1: true,
						img2: false,
						img3: false,
						img4: false,
						color: '#006DB5'
					})
				"
				style="background-color: #006DB5;"
			>
				1
			</div>
		</li>
		<li>
			<div
				@click="
					imgSlider({
						img1: false,
						img2: true,
						img3: false,
						img4: false,
						color: '#017143'
					})
				"
				style="background-color: #017143;"
			>
				2
			</div>
		</li>
		<li>
			<div
				@click="
					imgSlider({
						img1: false,
						img2: false,
						img3: true,
						img4: false,
						color: '#eb7495'
					})
				"
				style="background-color: #eb7495;"
			>
				3
			</div>
		</li>
		<li>
			<div
				@click="
					imgSlider({
						img1: false,
						img2: false,
						img3: false,
						img4: true,
						color: '#d752b1'
					})
				"
				style="background-color: #d752b1;"
			>
				4
			</div>
		</li>
	</ul>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'Thumb',
	methods: {
		...mapMutations(['imgSlider'])
	}
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
.thumb {
	position: absolute;
	width: 100%;
	left: 50%;
	bottom: 20px;
	transform: translateX(-50%);
	display: flex;
	justify-content: center;
}
.thumb li {
	list-style: none;
	display: inline-block;
	margin: 0 20px;
	cursor: pointer;
	transition: 0.5s;
}
.thumb li:hover {
	transform: translateY(-15px);
}
.thumb li img {
	max-width: 60px;
}
.thumb li div {
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100%;
	width: 60px;
	height: 60px;
	color: #fff;
}

@media (max-width: 991px) {
	.thumb {
		position: relative;
		bottom: 10%;
		margin-top: 30px;
	}
	.thumb li img {
		max-width: 40px;
	}
}
</style>
