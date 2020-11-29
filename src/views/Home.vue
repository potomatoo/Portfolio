<template>
  <div class="home">
    <section>
      <div class="circle"></div>
        <header>
          <a href="#"><img src="@/assets/logo.png" class="logo"></a>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">What's New</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </header>        
        <div class="content">
          <div class="textBox" v-if="img1">
            <h2><span>장씨배우</span></h2>            
            <p><b>장씨배우</b>은 영화 추천 커뮤니티 서비스입니다.</p>
            <p>- 평점을 활용한 추천 알고리즘으로 영화를 추천합니다.</p>
            <p>- 날씨API를 활용하여 해당 지역의 날씨에 어울리는 장르를 추천합니다.</p>
            <p>- 이상형 월드컵으로 좋아하는 배우가 출연한 영화를 추천합니다.</p>                        
            <a href="https://nervous-swartz-5a0624.netlify.app"><span class="mdi mdi-github"></span>Github</a>            
          </div>

          <div class="textBox" v-if="img2">
            <h2><span>AndPick</span></h2>            
            <p><b>AndPick</b>은 다양한 분야의 뉴스기사 및 기술블로그의 정보를 제공합니다.</p>
            <p>- 구독 기능은 관심있는 뉴스, 기술 블로그를 추가하여 최신 정보를 확인합니다.</p>
            <p>- 보드 기능은 구독하고 있는 채널의 기사를 저장하여 보관합니다.</p>
            <p>- 마이페이지는 다양한 편집 기능을 통해 자신의 생각을 정리하여 보관합니다.</p>                        
            <a href="https://github.com/potomatoo/AndPick"><span class="mdi mdi-github"></span>Github</a>            
          </div>

          <div class="textBox" v-if="img3">
            <h2><span>My Museum</span></h2>            
            <p><b>My Museum</b>은 온라인을 통해 개인에 맞는 전시회를 제공합니다.</p>
            <p>- 작가, 화풍, 박물관 별로 작품을 감상할 수 있습니다.</p>
            <p>- 개인 취향에 맞는 작품을 추천받을 수 있습니다.</p>
            <p>- 좋아하는 작품을 저장하고 나만의 전시회를 만들 수 있습니다.</p>                        
            <a href="https://github.com/potomatoo/MM-MyMuseum-"><span class="mdi mdi-github"></span>Github</a>            
          </div>

          <div class="textBox" v-if="img4">
            <h2><span>Byeper</span></h2>            
            <p><b>Byeper</b>는 학습자를 위한 교육 플랫폼입니다.</p>
            <p>- 강의에서 변화율을 감지하여 자동으로 PPT를 추출하여 수업자료를 제공합니다.</p>            
            <p>- Youtube의 교육 유튜버가 강사가 되어 강의를 제공합니다.</p>
            <p>- 동시적으로 정리를 할 수 있도록 노트 필기 기능 등 다양한 기능을 제공합니다.</p>
            <p>- NLTK를 활용하여 문제를 자동 생성합니다.</p>                        
            <a href="https://github.com/potomatoo/Byeper"><span class="mdi mdi-github"></span>Github</a>            
          </div>

          <div class="imgBox">
            <img v-if="img1" src="@/assets/img1.png" class="starbucks">
            <img v-if="img2" src="@/assets/img2.png" class="starbucks">
            <img v-if="img3" src="@/assets/img3.png" class="starbucks">
            <img v-if="img4" src="@/assets/img4.png" class="starbucks">
          </div>        
        </div>
        <ul class="thumb">
          <li><div @click="imgSlider(true, false, false, false, '#006DB5')" style="background-color: #006DB5;">1</div></li>
          <li><div @click="imgSlider(false, true, false, false, '#017143')" style="background-color: #017143;">2</div></li>
          <li><div @click="imgSlider(false, false, true, false, '#eb7495')" style="background-color: #eb7495;">3</div></li>
          <li><div @click="imgSlider(false, false, false, true, '#d752b1')" style="background-color: #d752b1;">4</div></li>
        </ul>
        <ul class="sci">
          <li><a href="#"><img src="@/assets/facebook.png" alt=""></a></li>
          <li><a href="#"><img src="@/assets/twitter.png" alt=""></a></li>
          <li><a href="https://www.instagram.com/potomato_o/"><img src="@/assets/instagram.png" alt=""></a></li>
        </ul>      
    </section>    
  </div>
</template>

<script>
export default {
  name: "Home",
  data: function () {
    return {
      img1: true,
      img2: false,
      img3: false,
      img4: false,
    }
  },
  methods: {
    imgSlider: function (img1, img2, img3, img4, color) {
      this.img1=img1
      this.img2=img2
      this.img3=img3
      this.img4=img4
      const circle = document.querySelector(".circle")
      circle.style.background = color
    }    
  }
};
</script>

<style scoped>
*
{
  margin: 0;
  padding: 0;  
  box-sizing: border-box;
}
section
{  
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
}

header
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header .logo
{
  position: relative;
  max-width: 80px;
}

header ul
{
  position: relative;
  display: flex;  
}

header ul li
{
  list-style: none;  
}

header ul li a
{
  display: inline-block;
  color: #333;
  font-weight: bold;
  margin-left: 40px;
  text-decoration: none;
}
.content
{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content .textBox 
{
  position: relative;
  max-width: 600px;  
}
.content .textBox h2
{
  color: #333;
  font-size: 4em;
  line-height: 1.4em;
  font-weight: 500;
  margin-bottom: 20px;
}
.content .textBox h2 span
{
  color: #017143;
  font-size: 1.2em;
  font-weight: 900;  
}
.content .textBox p
{
  color: #333  
}
.content .textBox a
{
  display: inline-block;
  margin-top: 30px;
  padding: 8px 20px;
  background: #017143;
  color: #fff;
  border-radius: 40px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;  
}
.content .textBox a span
{
  margin-right: 5px
}
.content .imgBox
{
  width: 600px;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;  
}
.content .imgBox img
{
  max-width: 340px;  
}
.thumb
{
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translateX(-50%);
  display: flex;
}
.thumb li
{
  list-style: none;
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  transition: 0.5s;
}
.thumb li:hover
{
  transform: translateY(-15px);
}
.thumb li img
{
  max-width: 60px;
}
.thumb li div
{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;  
  width: 60px;
  height: 60px;    
  color: #fff;  
}
.sci
{
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sci li
{
  list-style: none;  
}
.sci li a
{
  display: inline-block;
  margin: 5px 0;
  transform: scale(0.6);
  filter: invert(1);
}
.circle
{
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #006DB5;
  clip-path: circle(600px at right);
}
</style>