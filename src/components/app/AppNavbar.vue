<template>
	<header>
		<a @click="goHome('logo')"><img src="@/assets/logo.png" class="logo"/></a>
		<div class="toggle" @click="toggleMenu()"></div>
		<ul class="navigation">
			<li><a @click="goHome('navbar')">Home</a></li>
			<li><a @click="goWeb()">Web</a></li>
			<li><a @click="goBigData()">BigData</a></li>
			<li><a @click="goContact()">Contact</a></li>
		</ul>
	</header>
</template>

<script>
export default {
	name: 'AppNavbar',
	methods: {
		toggleMenu: function() {
			var menuToggle = document.querySelector('.toggle');
			var navigation = document.querySelector('.navigation');
			menuToggle.classList.toggle('active');
			navigation.classList.toggle('active');
		},
		goHome: function(where) {
			if (this.$route.name !== 'Home') {
				this.$router.push({ name: 'Home' });
			}
			if (where === 'navbar') {
				this.toggleMenu();
			}
		},
		goWeb: function() {
			if (this.$route.name !== 'WebProject') {
				this.$router.push({ name: 'WebProject' });
			}
			this.toggleMenu();
		},
		goBigData: function() {
			if (this.$route.name !== 'BigData') {
				this.$router.push({ name: 'BigData' });
			}
			this.toggleMenu();
		},
		goContact: function() {
			if (this.$route.name !== 'Contact') {
				this.$router.push({ name: 'Contact' });
			}
			this.toggleMenu();
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
	cursor: pointer;
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
	cursor: pointer;
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
