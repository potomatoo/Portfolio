<template>
	<div class="webProject">
		<div class="content">
			<div class="textBox" v-if="img1">
				<h2><span>장씨배우</span></h2>
				<hr />
				<p><b>장씨배우</b>은 영화 추천 커뮤니티 서비스입니다.</p>
				<p>- 평점을 활용한 추천 알고리즘으로 영화를 추천합니다.</p>
				<p>- 날씨API를 활용하여 해당 지역의 날씨에 어울리는 장르를 추천합니다.</p>
				<p>- 이상형 월드컵으로 좋아하는 배우가 출연한 영화를 추천합니다.</p>
				<a href="https://nervous-swartz-5a0624.netlify.app"><span class="mdi mdi-monitor"></span>Service</a>
				<a href="https://github.com/potomatoo/JangMovie"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="textBox" v-if="img2">
				<h2><span>AndPick</span></h2>
				<hr />
				<p><b>AndPick</b>은 다양한 분야의 뉴스기사 및 기술블로그의 정보를 제공합니다.</p>
				<p>- 구독 기능은 관심있는 뉴스, 기술 블로그를 추가하여 최신 정보를 확인합니다.</p>
				<p>- 보드 기능은 구독하고 있는 채널의 기사를 저장하여 보관합니다.</p>
				<p>- 마이페이지는 다양한 편집 기능을 통해 자신의 생각을 정리하여 보관합니다.</p>
				<a href="https://github.com/potomatoo/AndPick"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="textBox" v-if="img3">
				<h2><span>My Museum</span></h2>
				<hr />
				<p><b>My Museum</b>은 온라인을 통해 개인에 맞는 전시회를 제공합니다.</p>
				<p>- 작가, 화풍, 박물관 별로 작품을 감상할 수 있습니다.</p>
				<p>- 개인 취향에 맞는 작품을 추천받을 수 있습니다.</p>
				<p>- 좋아하는 작품을 저장하고 나만의 전시회를 만들 수 있습니다.</p>
				<a href="https://github.com/potomatoo/MM-MyMuseum-"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="textBox" v-if="img4">
				<h2><span>Byeper</span></h2>
				<hr />
				<p><b>Byeper</b>는 학습자를 위한 교육 플랫폼입니다.</p>
				<p>- 변화율을 감지하여 자동으로 PPT를 추출하여 수업자료를 제공합니다.</p>
				<p>- Youtube의 교육 유튜버가 강사가 되어 강의를 제공합니다.</p>
				<p>- 동시적으로 정리를 할 수 있도록 노트 필기 기능 등 다양한 기능을 제공합니다.</p>
				<p>- NLTK를 활용하여 문제를 자동 생성합니다.</p>
				<a href="https://github.com/potomatoo/Byeper"><span class="mdi mdi-github"></span>Github</a>
			</div>

			<div class="imgBox">
				<img v-if="img1" src="@/assets/img1.png" />
				<img v-if="img2" src="@/assets/img2.png" />
				<img v-if="img3" src="@/assets/img3.png" />
				<img v-if="img4" src="@/assets/img4.png" />
			</div>
		</div>
		<thumb />
	</div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import Thumb from '@/components/Thumb.vue';

export default {
	name: 'WebProject',
	components: {
		Thumb
	},
	computed: {
		...mapState(['img1', 'img2', 'img3', 'img4'])
	},
	methods: {
		...mapMutations(['imgSlider'])
	},
	mounted: function() {
		this.imgSlider({
			img1: true,
			img2: false,
			img3: false,
			img4: false,
			color: '#006DB5'
		});
	}
};
</script>

<style>
hr {
	margin: 0px 0px 30px 0px;
}
.webProject {
	width: 100%;
}
.content {
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.content .textBox {
	position: relative;
	max-width: 600px;
	padding: 20px;
}
.content .textBox h2 {
	color: #333;
	font-size: 4em;
	line-height: 1.4em;
	font-weight: 500;
	margin-bottom: 20px;
}
.content .textBox h2 span {
	color: #017143;
	font-size: 1.2em;
	font-weight: 900;
}
.content .textBox p {
	color: #333;
	font-size: 1em;
}
.content .textBox a {
	display: inline-block;
	margin-top: 30px;
	padding: 8px 20px;
	background: #017143;
	color: #fff;
	border-radius: 40px;
	font-weight: 500;
	letter-spacing: 1px;
	text-decoration: none;
	margin-right: 20px;
}
.content .textBox a span {
	margin-right: 5px;
}
.content .imgBox {
	width: 600px;
	display: flex;
	justify-content: flex-end;
}
.content .imgBox img {
	max-width: 340px;
	opacity: 0;
	animation: fadeInBottom 0.5s linear forwards;
	animation-delay: 0.5s;
}
@keyframes fadeInBottom {
	0% {
		transform: translateY(20px);
		opacity: 0;
	}
	100% {
		transform: translateY();
		opacity: 1;
	}
}

@media (max-width: 991px) {
	.content {
		flex-direction: column;
		margin-top: 100px;
	}
	.content .textBox h2 {
		font-size: 2.5em;
		margin-bottom: 15px;
	}
	.content .textBox h2 span {
		color: #fff;
	}
	.content .textBox p {
		color: #fff;
	}
	.content .textBox {
		max-width: 100%;
	}
	.content .textBox a {
		border: solid 1px;
		background: none;
	}
	.content .imgBox {
		max-width: 100%;
		justify-content: center;
		margin-top: 5px;
	}
	.content .imgBox img {
		max-width: 200px;
		max-height: 200px;
	}
	.content .imgBox img {
		opacity: 1;
		animation: none;
	}
}
@media (max-width: 700px) {
	.content .imgBox {
		margin-top: 20px;
	}
	.content .textBox a {
		margin-top: 10px;
	}
	.content .imgBox img {
		opacity: 1;
		animation: none;
	}
	.content .textBox p {
		font-size: 0.8em;
	}
}
</style>
