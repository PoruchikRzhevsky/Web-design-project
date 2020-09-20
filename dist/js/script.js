const body = document.getElementsByTagName('body')[0];

body.classList.remove('no-js');
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
	anchor.addEventListener("click", function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href');
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}
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
    var multiItemSlider = (function () {
      return function (selector, config) {
        var
          _mainElement = document.querySelector(selector), // основный элемент блока
          _sliderWrapper = _mainElement.querySelector('.js-slider__wrapper'), // обертка для .slider-item
          _sliderItems = _mainElement.querySelectorAll('.js-slider__item'), // элементы (.slider-item)
          _sliderControls = _mainElement.querySelectorAll('.js-slider__control'), // элементы управления
          _sliderControlLeft = _mainElement.querySelector('.js-slider__control_left'), // кнопка "LEFT"
          _sliderControlRight = _mainElement.querySelector('.js-slider__control_right'), // кнопка "RIGHT"
          _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки
          _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента    
          _positionLeftItem = 0, // позиция левого активного элемента
          _transform = 0, // значение транфсофрмации .slider_wrapper
          _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)
          _items = []; // массив элементов

        // наполнение массива _items
        _sliderItems.forEach(function (item, index) {
          _items.push({ item: item, position: index, transform: 0 });
        });

        var position = {
          getItemMin: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position < _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getItemMax: function () {
            var indexItem = 0;
            _items.forEach(function (item, index) {
              if (item.position > _items[indexItem].position) {
                indexItem = index;
              }
            });
            return indexItem;
          },
          getMin: function () {
            return _items[position.getItemMin()].position;
          },
          getMax: function () {
            return _items[position.getItemMax()].position;
          }
        }

        var _transformItem = function (direction) {
          var nextItem;
          if (direction === 'right') {
            _positionLeftItem++;
            if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) > position.getMax()) {
              nextItem = position.getItemMin();
              _items[nextItem].position = position.getMax() + 1;
              _items[nextItem].transform += _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform -= _step;
          }
          if (direction === 'left') {
            _positionLeftItem--;
            if (_positionLeftItem < position.getMin()) {
              nextItem = position.getItemMax();
              _items[nextItem].position = position.getMin() - 1;
              _items[nextItem].transform -= _items.length * 100;
              _items[nextItem].item.style.transform = 'translateX(' + _items[nextItem].transform + '%)';
            }
            _transform += _step;
          }
          _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
          if (e.target.classList.contains('js-slider__control')) {
            e.preventDefault();
            var direction = e.target.classList.contains('js-slider__control_right') ? 'right' : 'left';
            _transformItem(direction);
          }
        };

        var _setUpListeners = function () {
          // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
          _sliderControls.forEach(function (item) {
            item.addEventListener('click', _controlClick);
          });
        };

        window.addEventListener('resize', function(){
            _sliderWrapper.style.transform = 'translateX(0%)';
            _items.forEach((item) => {
              item.item.style.transform = 'translateX(0%)';
            });
        });

        // инициализация
        _setUpListeners();

        return {
          right: function () { // метод right
            _transformItem('right');
          },
          left: function () { // метод left
            _transformItem('left');
          }
        }

      }
    }());

    var slider = multiItemSlider('.js-slider');
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
	});
});

callOrderOverlayEl.addEventListener('click', function() {
  modalCallOrderEl.classList.toggle('close');
});

const modalProjectOrderEl = document.querySelector('.js-modal_project-order');
const projectOrderOverlayEl = document.querySelector('.js-overlay_project-order');
const closeButtonProjectOrderEl = document.querySelector('.js-close-button_project-order');
const projectOrderButtonEl = document.querySelector('.js-order-project');

closeButtonProjectOrderEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
});

projectOrderButtonEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
});

projectOrderOverlayEl.addEventListener('click', function() {
  modalProjectOrderEl.classList.toggle('close');
});
