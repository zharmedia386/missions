window.onload = () => {
    startSetTimeoutAnimation();
    startAnimFrameAnimation();
};

function startSetTimeoutAnimation() {
    const refreshRate = 100 / 60;
    const maxXPosition = 40;
    let planet3 = document.querySelector('.planet3');
    let planet4 = document.querySelector('.planet4');
    let title = document.querySelector('.title');
    let speedX = 0.5;
    let positionX = 0;

    window.setInterval(() => {
        positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
        planet3.style.top = positionX + 'px';
        planet4.style.top = positionX + 'px';
        title.style.top = positionX + 'px';
    }, refreshRate);
}

function startAnimFrameAnimation() {
    const refreshRate = 100 / 60;
    const maxXPosition = 40;
    let planet3 = document.querySelector('.planet3');
    let planet4 = document.querySelector('.planet4');
    let title = document.querySelector('.title');
    let speedX = 0.5;
    let positionX = 0;

    function step() {
        positionX = positionX + speedX;
        if (positionX > maxXPosition || positionX < 0) {
        speedX = speedX * (-1);
        }
        planet3.style.top = positionX + 'px';
        planet4.style.top = positionX + 'px';
        title.style.top = positionX + 'px';
        window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
}