var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var noButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var selectedPlanButtons = document.querySelectorAll('.plan button');

selectedPlanButtons.forEach((button) => {
  button.addEventListener('click', () => {
    /* backdrop.style.display = 'block';
    modal.style.display = 'block';    */
    // modal.className = 'open';
    backdrop.classList.add('open');
    modal.classList.add('open');
  });
});

var misclisteners = [backdrop, noButton];
misclisteners.forEach((listener) => {
  if (listener) {
    listener.addEventListener('click', () => {
      backdrop.classList.remove('open');
      if (modal) {
        modal.classList.remove('open');
      }
      mobileNav.classList.remove('open');
    });
  }
});

toggleButton.addEventListener('click', () => {
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});