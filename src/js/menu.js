const navListEl = document.getElementsByClassName('js-top-menu')[0];
const navSelectEl = document.getElementsByClassName('js-top-menu__button_open')[0];

navSelectEl.addEventListener('click', function(event){
	navListEl.classList.toggle('menu-open');

	if (navSelectEl.getAttribute('aria-label') === 'Развернуть меню') {
		navSelectEl.setAttribute('aria-label', 'Свернуть меню');
	} else {
		navSelectEl.setAttribute('aria-label', 'Развернуть меню');
	}

	if (navSelectEl.getAttribute('aria-expanded') === 'false') {
		navSelectEl.setAttribute('aria-expanded', 'true');
	} else {
		navSelectEl.setAttribute('aria-expanded', 'false');
	}
});