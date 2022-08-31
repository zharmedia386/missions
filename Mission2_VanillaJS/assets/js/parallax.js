const pyramids = document.querySelector(".pyramids");
const palace = document.querySelector(".palace");
const logo = document.querySelector(".logo");
const nav = document.querySelector("nav");
const info = document.querySelector(".info");

//reveal elements on page loading
window.addEventListener("load", () => {
  pyramids.style.transform = "translateX(0)";
  palace.style.transform = "translateX(0)";
  logo.style.transform = "translateY(0)";
  nav.style.transform = "translateY(0)";

  setTimeout(() => {
    info.style.transform = "translateY(0)";
    info.style.opacity = "1";
  }, 500);
});

//scrolling effects on website elements
window.addEventListener("scroll", () => {
  const scrollVal = window.scrollY;

  pyramids.style.left = scrollVal * -0.25 + "px";
  palace.style.left = scrollVal * 0.25 + "px";
  info.style.marginTop = scrollVal * 1.1 + "px";

  pyramids.style.transition = "0s";
  palace.style.transition = "0s";
  info.style.transition = "0s";
});

//hide and display home info on scrolldown and up
window.onscroll = function(){
  if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
    info.style.opacity = "0";
    info.style.transition = "0.6s";
  }
  else{
    info.style.opacity = "1";
    info.style.transition = "0.6s";
  }
}