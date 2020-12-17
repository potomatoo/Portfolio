<template>
	<div class="bigData">
		<div class="content">
			<div class="textBox">
				<h5>
					<span>Intern</span>
				</h5>
				<h2><span>포스코ICT</span></h2>

				<p>공기청정기 빅데이터를 활용한 <b>PM10 패턴 그룹화</b> & <b>사용자 인사이트 도출</b></p>
				<p>- <b>기간</b>: 2019.08.05 ~ 2019.08.28</p>
				<p>- <b>목표</b>: PM10 패턴화를 통한 사용자 가이드 제안</p>
				<hr />
				<p>[과정]</p>
				<p><b>1)</b> 약 2000만 건의 <b>데이터 전처리</b></p>
				<p><b>2)</b> Heatmap을 통한 <b>상관관계 분석</b></p>
				<p><b>3)</b> Device <b>Sampling</b></p>
				<p><b>4)</b> Seaborn을 활용한 <b>데이터 시각화</b></p>
				<p><b>5)</b> 이상치 <b>탐색</b> & Mode 별 특징 <b>분석</b></p>
				<p><b>6)</b> <b>인사이트</b> 도출 & <b>솔루션</b> 제안</p>
				<a href="https://drive.google.com/file/d/13uVrlr46yFnc1bNYaYu50qY9JPm1Vw0h/view?usp=sharing"
					><span class="mdi mdi-file-document"></span>PPTX</a
				>
			</div>

			<div class="imgBox">
				<img src="@/assets/posco.png" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BigData',
	mounted: function() {
		var circle = document.querySelector('.circle');
		var textBox = document.querySelector('.content .textBox');
		circle.style.background = '#eb7495';
		textBox.style.padding = '30px 20px 20px 20px';
	}
};
</script>

<style scoped>
* {
	box-sizing: border-box;
}
.bigData {
	width: 100%;
}
@media (max-width: 991px) {
	.content .textBox h5 span {
		color: #fff;
	}
	.content .imgBox img {
		max-width: 200px;
		max-height: 200px;
		opacity: 1;
		animation: none;
	}
}
</style>
