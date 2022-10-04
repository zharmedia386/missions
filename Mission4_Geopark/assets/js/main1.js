
class Utils {

    /**
     * @param {HTMLElement} element
     * @returns {HTMLElement[]}
     */
    toArray(element) {
      return [].slice.call(element);
    }
  
    /**
     * 
     * @param {String} selector 
     * @returns {HTMLElement}
     */
    get(selector) {
      return document.querySelector(selector);
    }
  }
  
  
  (() => {
    let ready = false;
    let animationTimeout;
    let transitionTimeout;
  
    const hideElements = () => {
      const heading = get('.second-paragraph').children;
      const description = get('.description').children;
      const content = get('.places .fp-tableCell .center-content').children;
      const images = get('.images').children;
      gsap.to([heading], { autoAlpha: 0, duration: 0 });
      gsap.to('.box', {height: 0, duration: 0});
      gsap.to(content, { autoAlpha: 0, duration: 0});
      gsap.to(images, {autoAlpha: 0, duration: 0});
    }
  
    const animateIn = ({ currentIndex }) => {
      const { get } = new Utils();
      if (currentIndex === 0) {
        const heading = get('.second-paragraph').children;
        const description = get('.description').children;
        const images = get('.images').children;
        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 1,
          x: 0,
          duration: 0.5,
        });
        gsap.to(description, {
          autoAlpha: 1,
          delay: 0.5,
          duration: 0.3,
        });
        gsap.to('.box', {
          height: '100px',
          duration: 0.5
        })
        gsap.to(images, {
          autoAlpha: 1,
          stagger: 0.10,
          duration: 0.3
        })
      }
  
      if (currentIndex === 1) {
        const content = get('.places .fp-tableCell .center-content').children;
        gsap.to(content, {
          stagger: 0.15,
          autoAlpha: 1,
          duration: 0.5
        })
      }
    }
  
    const animateOut = ({ currentIndex }) => {
      const { get } = new Utils();
  
      if (currentIndex === 0) {
        const heading = get('.second-paragraph').children;
        const description = get('.description').children;
        const images = get('.images').children;
        gsap.to(heading, {
          stagger: 0.15,
          autoAlpha: 0,
          x: -30,
          duration: 0.5,
        });
        gsap.to(description, {
          autoAlpha: 0,
          delay: 0.5,
          duration: 0.3,
        });
        gsap.to('.box', {height: '0px', delay: 0.3, duration: 0.3});
        gsap.to(images, {
          autoAlpha: 0,
          stagger: 0.10,
          delay: 0.1,
          duration: 0.3
        })
      }
  
      if (currentIndex === 1) {
        const content = get('.places .fp-tableCell .center-content').children;
        gsap.to(content, {
          stagger: 0.15,
          autoAlpha: 0,
          duration: 0.5
        })
      }
    }
  
  
    const fullPage = new fullpage("#fullpage", {
      navigation: true,
      navigationPosition: "left",
      afterLoad: function (origin, destination, direction) {
          animateIn({ currentIndex: destination.index });
      },
      onLeave: function (origin, nextIndex, direction) {
        if (ready) return;
  
        clearTimeout(animationTimeout);
        clearTimeout(transitionTimeout);
  
        animateOut({ currentIndex: origin.index });
        animationTimeout = setTimeout(() => {
          ready = true;
          if (direction === 'down') {
            fullpage_api.moveSectionDown();
            switchIndex();
          } else {
            fullpage_api.moveSectionUp();
            switchIndex();
          }
          transitionTimeout = setTimeout(() => {
            ready = false;
          }, 300);
        }, 300);
  
        return ready;
      },
    });
  
  
  
    const { toArray, get } = new Utils();
    const sections = toArray(get('#fullpage').children).filter(s => s.localName === 'section');
    const length = sections.length;
    const counterContainer = toArray(get('.counter').children);
    
  
    const switchIndex = () =>  {
      const { index } = fullPage.getActiveSection();
      counterContainer.map((elem) => {
        if (elem.className === 'counter-1') elem.textContent = `${0}${index + 1}`;
        if (elem.className === 'counter-2') elem.textContent = length;
      });
    }
  
    hideElements();
    switchIndex();
  })();
  
  
  