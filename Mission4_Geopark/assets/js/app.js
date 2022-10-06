// new fullpage('#fullpage', {
// 	//options here
//     autoScrolling:true,
//     scrollHorizontally: true,
//     sectionsColor: ['#000', '#fffff', '#000', '#fffff', '#000'],
//     navigation: false,
//     responsiveSlides: true,
//     waterEffect: true,
//     dropEffectOptions: { speed: 5300, color: '#F82F4D', zIndex: 9999},
//     fadingEffect: true,
//     scrollingSpeed: 1000,
//     onLeave: (origin,destination,direction)=> {
//         const section = destination.item;
//         console.log(section);
//         TweenMax.fromTo(section, 1, {opacity: 0}, {opacity: 1},'+=700');
//     }
// });

/*====== SCROLL REVEAL SECTION ======*/
const sr = ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

/* Data */
sr.reveal('.first-paragraph',{origin: 'top', interval: 200}); 
sr.reveal('.fourth-paragraph',{origin: 'top', interval: 200, reset: true}); 
// sr.reveal('.japan1',{origin: 'top'}); 
// sr.reveal('.second-paragraph',{origin: 'top', delay: 600, interval: 200}); 
// sr.reveal('.content',{origin: 'left', delay: 600, interval: 200}); 



// CURSOR ANIMATION
const cursor = document.querySelector(".cursor");
var timeout;

//follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    //cursor effects when mouse stopped
    function mouseStopped(){
    cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

//cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});


