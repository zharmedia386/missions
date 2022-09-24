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
sr.reveal('.first-paragraph',{origin: 'top'}); 
// sr.reveal('.japan1',{origin: 'top'}); 
// sr.reveal('.second-paragraph',{origin: 'top'}); 
// sr.reveal('.content',{origin: 'left', delay: 600, interval: 200}); 


