var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var selectedPlanButtons = document.querySelectorAll('.plan button');

selectedPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';    
  });
});

var misclisteners = [backdrop, noButton];
misclisteners.forEach((listener) => {
  listener.addEventListener('click', () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
    mobileNav.style.display = 'none';
  });
});

toggleButton.addEventListener('click', () => {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});