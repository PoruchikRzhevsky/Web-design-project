const modalProjectOrderEl = document.querySelector('.js-modal_project-order');
const projectOrderOverlayEl = document.querySelector('.js-overlay_project-order');
const closeButtonProjectOrderEl = document.querySelector('.js-close-button_project-order');
const projectOrderButtonEl = document.querySelector('.js-order-project');
const projectForm = document.querySelector('.js-modal__form_project');

closeButtonProjectOrderEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
  body.classList.toggle('no-scroll');
  projectOrderButtonEl.focus();
  projectForm.reset();
});

projectOrderButtonEl.addEventListener('click', function(e) {
  modalProjectOrderEl.classList.toggle('close');
  closeButtonProjectOrderEl.focus();
  body.classList.toggle('no-scroll');
  e.preventDefault();
});

projectOrderOverlayEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
  body.classList.toggle('no-scroll');
  projectForm.reset();
});

window.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
    	modalProjectOrderEl.classList.add('close');
    	body.classList.toggle('no-scroll');
      projectForm.reset();
    }
}); 
