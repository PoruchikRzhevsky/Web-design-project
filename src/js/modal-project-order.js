const modalProjectOrderEl = document.querySelector('.js-modal_project-order');
const projectOrderOverlayEl = document.querySelector('.js-overlay_project-order');
const closeButtonProjectOrderEl = document.querySelector('.js-close-button_project-order');
const projectOrderButtonEl = document.querySelector('.js-order-project');

closeButtonProjectOrderEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
  projectOrderButtonEl.focus();
});

projectOrderButtonEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
  closeButtonProjectOrderEl.focus();
});

projectOrderOverlayEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
});

window.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) modalProjectOrderEl.classList.toggle('close');
}); 
