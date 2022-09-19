let egypt =document.querySelector(".section1 .pytext");
let egypt2 =document.querySelector(".section2 .mummytext");
let sunref1 = document.querySelector(".section1 .sunref1")
let sunref2 = document.querySelector(".section1 .sunref2")
let cloud1 = document.querySelector(".section1 .cloud1")
let cloud2 = document.querySelector(".section1 .cloud2")
let hand1 = document.querySelector(".section1 .hand1")
let taboot = document.querySelector(".section2 .taboot");

let move=0;


  









window.addEventListener("scroll",function(){
var y = window.scrollY;
egypt.style.marginTop = y * 0.5  + "px";
cloud1.style.marginRight = y * 1.5 + "px";
cloud2.style.marginLeft = y * 1.0 + "px";
sunref1.style.marginLeft = y * 0.2 + "px";
sunref1.style.marginTop = y *  0.2 + "px";

sunref2.style.left = ((213 -y * 0.5)<0 ||(184 -y * 0.5)  < 0 ? 213 : (213 -y * 0.5)) +"px";
sunref2.style.top = ((213 -y * 0.5) < 0 ||(184 -y * 0.5) < 0 ? 184 : (184 -y * 0.5)) + "px";
if(y>=1096){
     move = -65 + y*0.04;
taboot.style.transform ="translateX("+ move +"px)";

}
else{
 taboot.style.transform ="translateX(-65px)"   


}
if(y>= 332){
    egypt2.style.top = -335 + (y * 0.5)  + "px";
}
console.log(y)

})











