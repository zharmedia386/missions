const flightPath = {
    curviness: 0.2,
    autoRotate: true,
    values: [
        { x: 100, y: -30 },
        { x: 300, y: 90 },
        { x: 500, y: -30 },
        { x: 700, y: 90 },
        { x: 900, y: -30 },
        { x: 1100, y: 90 },
        { x: window.innerWidth, y: -30 }
    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to(".bool", 1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })
);

const Controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 1500,
    triggerHook: 0
})
    .setTween(tween)
    .addIndicators()
    .setPin('.animation')
    .addTo(Controller);