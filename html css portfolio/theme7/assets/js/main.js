/*===== SHOW MENU =====*/

// const showMenu = (toggleId, navId) => {
//   const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId);

//   if (toggle && nav) {
//     toggle.addEventListener('click', () => {
//       nav.classList.toggle('show-menu');
//     });
//   }
// };
// showMenu('nav-toggle', 'nav-menu');

/*===== REMOVE MENU MOBILE =====*/

/*===== SCROLL SECTIONS ACTIVE LINK =====*/

/*===== CHANGE BACKGROUND HEADER =====*/

/*===== SHOW SCROLL TOP =====*/

/*===== MIXITUP FILTER PORTFOLIO =====*/

let mixerPortfolio = mixitup('.portfolio__container', {
  selectors: {
    target: '.portfolio__content',
  },
  animation: {
    duration: 400,
  },
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio__item');
function activePortfolio() {
  if (linkPortfolio) {
    linkPortfolio.forEach((l) => l.classList.remove('active-portfolio'));
    this.classList.add('active-portfolio');
  }
}
linkPortfolio.forEach((l) => l.addEventListener('click', activePortfolio));

/*===== SWIPER CAROUSEL =====*/

/*===== GSAP ANIMATION =====*/
