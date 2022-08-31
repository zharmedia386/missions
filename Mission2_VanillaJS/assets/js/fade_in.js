const fade_in1 = document.querySelector(".fade_in1");
const fade_in2 = document.querySelector(".fade_in2");

fade_in1.style.opacity = "0";
fade_in2.style.opacity = "0";

//reveal elements on page loading
window.addEventListener("load", () => {  
    setTimeout(() => {
      fade_in1.style.transform = "translateY(0)";
      fade_in1.style.opacity = "0";

      fade_in2.style.transform = "translateY(0)";
      fade_in2.style.opacity = "0";

    }, 500);
  });
  
  //scrolling effects on website elements
  
  //hide and display home fade_in on scrolldown and up
  window.onscroll = function(){
    fade_in1.style.opacity = "1";
    fade_in1.style.transition = "3s";

    fade_in2.style.opacity = "1";
    fade_in2.style.transition = "4s";

    if(document.documentElement.scrollTop > 600 || document.documentElement.scrollTop == 0){
        fade_in1.style.opacity = "0";
        fade_in1.style.transition = "0.6s";

        fade_in2.style.opacity = "0";
        fade_in2.style.transition = "0.6s";

      }
  }