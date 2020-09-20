const firstPaginationButtonEl = document.querySelector('.js-pagination__button_first');
const secondPaginationButtonEl = document.querySelector('.js-pagination__button_second');
const thirdPaginationButtonEl = document.querySelector('.js-pagination__button_third');

const thirdSliderItemEl = document.getElementsByClassName('js-slider__item')[2];

const sliderWrapperEl = document.querySelector('.js-slider__wrapper');

function changeButtonColor (a, b, c) {
	a.style.backgroundColor = '#ebebeb';
	b.style.backgroundColor = '#ebebeb';
	c.style.backgroundColor = '#f53f4f';
}

firstPaginationButtonEl.addEventListener('click', function(){
	sliderWrapperEl.style.transform = 'translateX(50%)';
	thirdSliderItemEl.style.transform = 'translateX(-300%)';

	if ((window.innerWidth < 1024 ))  {
		sliderWrapperEl.style.transform = 'translateX(100%)';
		thirdSliderItemEl.style.transform = 'translateX(-300%)';
	}

	changeButtonColor(secondPaginationButtonEl, thirdPaginationButtonEl, this);
});

secondPaginationButtonEl.addEventListener('click', function(){
	sliderWrapperEl.style.transform = 'translateX(-1.6%)';
	thirdSliderItemEl.style.transform = 'translateX(0%)';

	changeButtonColor(firstPaginationButtonEl, thirdPaginationButtonEl, this);
});

thirdPaginationButtonEl.addEventListener('click', function(){
	sliderWrapperEl.style.transform = 'translateX(-51.6%)';

	if ((window.innerWidth < 1024 ))  {
		sliderWrapperEl.style.transform = 'translateX(-100%)';
	}

	changeButtonColor(secondPaginationButtonEl, firstPaginationButtonEl, this);
});