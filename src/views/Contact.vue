<template>
	<div class="contact">
		<div class="content">
			<div class="textBox">
				<h2><span>Let's Talk</span></h2>
				<hr />
				<p>소통하고 싶으신 분은 아래에 주소로 연락바랍니다.</p>
				<p>- <b>Mail</b> : duseh73@gmail.com</p>
				<p>- <b>Github</b> : https://github.com/potomatoo</p>
				<a href="https://github.com/potomatoo"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="imgBox">
				<img src="@/assets/mail.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	mounted: function() {
		var circle = document.querySelector('.circle');
		circle.style.background = '#808080';
	}
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}
.contact {
	width: 100%;
}
</style>
