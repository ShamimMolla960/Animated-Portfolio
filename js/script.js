// Animation Button Start
let animation_close_btn= document.querySelector(".animation_close_btn");
let line_1= document.querySelector(".line_1");
let line_2= document.querySelector(".line_2");
let line_3= document.querySelector(".line_3");


animation_close_btn.addEventListener("Click",function(){
  line_1.classList.add("rotate_1");
  line_2.classList.toggle("hide");
  line_3.classList.toggle("rotate_2");
 });
 // Animation Button End

// Portfolio Part Start
jQuery('.portfolio_gellary').mixItUp({  

  selectors: {
    target: '.tile',
    filter: '.filter',
    sort: '.sort-btn'
  },
  
      animation: {
      animateResizeContainer: false,
      effects: 'fade scale'
    }
});
// Portfolio Part End

// Sticky Menu Part Start
window.addEventListener("scroll", function(){
  let sticky = window.scrollY;
  if(sticky>100){
      navbar.classList.add("sticky_menu")
  }else{
      navbar.classList.remove("sticky_menu")
  }
});
// Sticky Menu Part End

// Preloader Part Start
let prebody =document.querySelector(".prebody")
setTimeout(()=>{
    prebody.style.display="none"
},2000)


let left =document.querySelector(".left")
setTimeout(() => {
    left.style.display="none"
},2000)

let right =document.querySelector(".right")
setTimeout(() => {
    right.style.display="none"
    
},2000)
// Preloader Part End

// Venobox Part Start
new VenoBox({
  selector: '.youtube-play',
});
new VenoBox({
  selector: '.vimeo-play',
});
new VenoBox({
  selector: '.mp4-play',
});
new VenoBox({
  selector: '.image-popup',
});
// Venobox Part Start

// Counterup Part Start
$(function(){
  $(".counter").counterUp({
    delay: 10,
    time: 1500,
  });
});
// Counterup Part End

// Barfiller Part Start
$(function(){
    $('#Illustrator').barfiller({
      barColor:"#f75023"
    });
    $('#Photoshop').barfiller({
      barColor:"green"
    });
    $('#Figma').barfiller({
      barColor:"#8067F0"
    });
});
// Barfiller Part End

// Slick Slider Start
 $(function(){
  $(".testimonial_slider").slick({
    autoplay:true,
    arrows:false,
    dots:true,
  });
 });
 // Slick Slider End

//  Aos Animation Start
  AOS.init();
//  Aos Animation Start

// Tilt Start
  $('.service_item').tilt({
    maxTilt:5,
});
// Tilt End


 
