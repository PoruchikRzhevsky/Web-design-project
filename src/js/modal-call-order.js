const modalCallOrderEl = document.querySelector('.js-modal_call-order');
const callOrderOverlayEl = document.querySelector('.js-overlay_call-order');
const closeButtonCallOrderEl = document.querySelector('.js-close-button_call-order');
const callOrderButtonEl = document.querySelectorAll('.js-call-button');
const callForm = document.querySelector('.js-modal__form_call');

closeButtonCallOrderEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
  body.classList.remove('no-scroll');
  callForm.reset();
});

callOrderButtonEl.forEach((item) => {
	item.addEventListener('click', function(e) {
		modalCallOrderEl.classList.toggle('close');
		body.classList.add('no-scroll');
		closeButtonCallOrderEl.focus();
		e.preventDefault();
	});
});

callOrderOverlayEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
  body.classList.remove('no-scroll');
  callForm.reset();
});

window.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) {
    	modalCallOrderEl.classList.add('close');
    	body.classList.remove('no-scroll');
      callForm.reset();
    }
}); 