document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const authBlock = document.getElementById('auth-block');

  hamburger.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    authBlock.classList.toggle('active');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', function (event) {
    if (!navMenu.contains(event.target) && !authBlock.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('active');
      authBlock.classList.remove('active');
    }
  });
});