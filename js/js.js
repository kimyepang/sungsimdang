//팝업

let popup = document.querySelectorAll(".popup li");
let close = document.querySelectorAll(".close");
let nomore = document.querySelectorAll(".nomore");

close.forEach(function(v,k){
  v.onclick = function(){
    popup[k].classList.add("on")
  }
});

nomore.forEach(function(v,k){
  v.onclick = function(){
    popup[k].classList.add("on")
  }
});


//슬라이드

var swiper = new Swiper(".mySwiper", {
  speed:1500,
  loop: true,
  transition:1000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,

  },
  autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      
});

//헤더 숨김

let header = document.querySelector("header")
window.onscroll = function(){
  if(window.scrollY > 200){
    header.classList.add("on");
  }else if(window.scrollY < 200){
    header.classList.remove("on");
  }
}

//업 버튼

let upbtn = document.querySelector(".upbtn");
upbtn.getElementsByClassName("a").onclick = function(e){
e.preventDefault;
window.scrollTo({top: 0, behavior: 'smooth'})
}

//명예의 전당

var swiper1 = new Swiper(".mySwiper1", { 
  //스와이퍼 여러개면 var을 다른 이름으로 지정해야 함, 클래스도 myswiper은 다르게
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 1500,
  loop: true, //무한루프는 오토플레이가 아니라 기본값에 주는거임
  //slidesOffsetBefore: -1042,
  autoplay: {
    dalay:1000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


AOS.init({ offset:200 });