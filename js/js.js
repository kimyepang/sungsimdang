
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
  speed:1000,
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

//명예의 전당

var swiper = new Swiper(".mySwiper1", {
  speed: 1500,
  loop: true,
  slidesOffsetBefore: -1042,
  autoplay: {
    dalay: 2000,
    loop: true,
    disableOnInteraction: false,
    loopAdditionalSlides: 4,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

  AOS.init({ offset:300 });
