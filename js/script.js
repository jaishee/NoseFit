const accordionHeaders = document.querySelectorAll('.accordion-header');
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('nav.navbar');
const thumbs = document.querySelectorAll('.thumb');
const mainImage = document.querySelector('.main-image');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Remove active class from all
    thumbs.forEach(t => t.classList.remove('active'));
    // Add active to clicked
    thumb.classList.add('active');
    // Change main image src
    mainImage.src = thumb.src;
  });
});
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
accordionHeaders.forEach(header => {
  header.setAttribute('aria-expanded', 'false');

  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.toggle('active');
    header.setAttribute('aria-expanded', isActive);

    // Close all other accordions except the clicked one
    accordionHeaders.forEach(h => {
      if (h !== header) h.parentElement.classList.remove('active');
    });
  });
});


