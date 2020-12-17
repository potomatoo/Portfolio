<template>
	<div class="home">
		<div class="content">
			<div class="textBox">
				<h5><span>Yeonjae Lee</span></h5>
				<h2><span>I'm Developer</span></h2>
				<hr />
				<p>저는 <b>Frontend</b> & <b>BigData</b> 개발자입니다.</p>
				<p>- <b>경기대학교</b> 국제관계학과 & 융합데이터공학 졸업</p>
				<p>- <b>삼성 청년 SW 아카데미</b> 3기 수료</p>
				<p>- <b>포스코ICT</b> 이산화탄소 예측 모델링 및 인사이트 도출 프로젝트 참여 (인턴)</p>
				<p>- <b>산업 빅데이터 전문가 과정</b> 수료</p>
				<p>- <b>청년 취업 아카데미</b> (빅데이터를 활용한 파이썬 프로그래밍 200시간) 수료</p>
				<a href="https://github.com/potomatoo"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="imgBox">
				<img src="@/assets/profile.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Home',
	mounted: function() {
		var circle = document.querySelector('.circle');
		var profile = document.querySelector('.content .imgBox img');
		circle.style.background = '#c3323a';
		profile.style.maxWidth = '600px';
	}
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}
.home {
	width: 100%;
}
@media (max-width: 991px) {
	.content .textBox h5 span {
		color: #fff;
	}
}
</style>
