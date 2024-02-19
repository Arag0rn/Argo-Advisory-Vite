const journey = document.querySelectorAll(".journey-container");

 const journeyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const focusElement = entry.target;
      focusElement.classList.add('animate__animated', 'animate__slideInLeft', 'animate__medium');
    }
  });
});

journey.forEach((focusElement) => {
  journeyObserver.observe(focusElement);
});

const fuel = document.querySelectorAll(".fuel-container");

const fuelObserver = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     const focusElement = entry.target;
     focusElement.classList.add('animate__animated', 'animate__slideInLeft', 'animate__medium');
   }
 });
});

fuel.forEach((focusElement) => {
  fuelObserver.observe(focusElement);
});

const resourses = document.querySelectorAll(".resourses-container");

const resoursesObserver = new IntersectionObserver((entries) => {
 entries.forEach((entry) => {
   if (entry.isIntersecting) {
     const focusElement = entry.target;
     focusElement.classList.add('animate__animated', 'animate__backInRight', 'animate__medium');
   }
 });
});

resourses.forEach((focusElement) => {
  resoursesObserver.observe(focusElement);
});
 

 const ourFocus = document.querySelectorAll(".our-focus-section-wrap");

 const ourFocusObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const focusElement = entry.target;
      focusElement.classList.add('animate__animated', 'animate__fadeIn', 'animate__medium');
    }
  });
});

ourFocus.forEach((focusElement) => {
  ourFocusObserver.observe(focusElement);
});
 
 const serviceCards = document.querySelectorAll(".service-card");

const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const card = entry.target;
      card.classList.add('animate__animated', 'animate__fadeInRight', 'animate__medium');
    }
  });
});

serviceCards.forEach((card) => {
  intersectionObserver.observe(card);
});


