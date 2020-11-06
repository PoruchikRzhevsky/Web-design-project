const modalCallOrderEl = document.querySelector('.js-modal_call-order');
const callOrderOverlayEl = document.querySelector('.js-overlay_call-order');
const closeButtonCallOrderEl = document.querySelector('.js-close-button_call-order');
const callOrderButtonEl = document.querySelectorAll('.js-call-button');

closeButtonCallOrderEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});

callOrderButtonEl.forEach((item) => {
	item.addEventListener('click', function() {
		modalCallOrderEl.classList.toggle('close');
		closeButtonCallOrderEl.focus();
	});
});

callOrderOverlayEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});

window.addEventListener('keydown', function (e) {
    if(e.keyCode === 27) modalCallOrderEl.classList.add('close');
}); 