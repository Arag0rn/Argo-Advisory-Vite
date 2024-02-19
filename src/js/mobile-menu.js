const openMenuBtn = document.querySelectorAll('.js-open-menu');
const closeMenuBtn = document.querySelectorAll('.js-close-menu');
const mobileMenu = document.querySelector('.js-menu-container');


const toggleMenu = (btn) => {
  const isMenuOpen =
  btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  if (isMenuOpen()) {
    document.body.style.overflow = 'auto';
  } else {
    document.body.style.overflow = 'hidden';
  }

  const scrollLockMethod = !isMenuOpen
  ? 'disableBodyScroll'
  : 'enableBodyScroll';
bodyScrollLock[scrollLockMethod](document.body);
};


const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    toggleMenu(openMenuBtn[0]);
  }

};



openMenuBtn.forEach((btn) => {
  btn.addEventListener('click', () => toggleMenu(btn));
});

closeMenuBtn.forEach(btn => {
  btn.addEventListener('click', () => toggleMenu(btn));
});

document.querySelectorAll('.header-toggleMenu-item a').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    scrollToSection(sectionId);
  });
});

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});