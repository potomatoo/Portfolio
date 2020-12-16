<template>
	<header>
		<a href="#"><img src="@/assets/logo.png" class="logo"/></a>
		<div class="toggle" @click="toggleMenu()"></div>
		<ul class="navigation">
			<li><a href="#">Home</a></li>
			<li><a href="#">Web</a></li>
			<li><a href="#">BigData</a></li>
			<li><a href="#">Contact</a></li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'Navigation',
	methods: {
		toggleMenu: function() {
			var menuToggle = document.querySelector('.toggle');
			var navigation = document.querySelector('.navigation');
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		}
	}
};
</script>

<style scoped>
header {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 100px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header .logo {
	position: relative;
	max-width: 80px;
	border-radius: 50%;
}

header ul {
	position: relative;
	display: flex;
}

header ul li {
	list-style: none;
}

header ul li a {
	display: inline-block;
	color: #333;
	font-weight: bold;
	margin-left: 40px;
	text-decoration: none;
}

@media (max-width: 991px) {
	header {
		padding: 20px;
	}
	header .logo {
		max-width: 70px;
	}
	header ul {
		display: none;
	}
	.toggle {
		position: relative;
		width: 30px;
		height: 30px;
		cursor: pointer;
		background: url('../../assets/menu.png');
		background-size: 30px;
		background-position: center;
		background-repeat: no-repeat;
		filter: invert(1);
		z-index: 11;
	}
	.toggle.active {
		position: fixed;
		right: 20px;
		background: url('../../assets/close.png');
		background-size: 25px;
		background-position: center;
		background-repeat: no-repeat;
	}
	header ul.navigation.active {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #fff;
		z-index: 10;
	}
	header ul li a {
		font-size: 1.5em;
		margin: 5px 0;
	}
}
</style>
