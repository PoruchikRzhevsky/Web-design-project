const modalCallOrderEl = document.querySelector('.js-modal_call-order');
const callOrderOverlayEl = document.querySelector('.js-overlay_call-order');
const closeButtonCallOrderEl = document.querySelector('.js-close-button_call-order');
const callOrderButtonEl = document.querySelector('.js-call-button');

closeButtonCallOrderEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});

callOrderButtonEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});

callOrderOverlayEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});
