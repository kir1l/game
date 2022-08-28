// элементы хедера
const headerMoneyOut = document.querySelector('.header__money-out'),
	headerLvlOut = document.querySelector('.header__lvl-out'),
	btnBack = document.querySelector('.shop__link');

// элементы продуктов
const product = document.querySelectorAll('.shop__item'), // сам продукто
	btnBuy = document.querySelectorAll('.shop-item__button');

let isFood = false;
let lvlOfSpeed = 1, // колличество букв по нажатии клавиши
	salary = 0, // зарплата за 1 задание
	money = 0,
	lvl = 1,
	localData = {},
	isBoost = false;

let buyedDetails = [];

// получение информации карточки по которой нажали
btnBuy.forEach((button) => {
	button.addEventListener('click', (event) => {
		let card = event.target.parentNode; // родитель кнопки
		let price = Number(card.querySelector('.price').textContent); // цена
		let increase = Number(card.querySelector('.value').textContent); // увеличение

		// если денег не хватает
		if (money < price) {
			card.querySelector('.error-out').textContent = 'недостаточно денег((';
			return;
		}

		// покупка еды
		if (card.dataset.name == 'food') {
			// проверка на наличие еды
			if (isFood) {
				card.querySelector('.error-out').textContent = 'слишком много еды!';
				return;
			}
			money -= price; // покупка
			card.querySelector('.succes').textContent = 'куплено'; // успешно
			isFood = true; // еда есть
			let time = Number(card.querySelector('.time').textContent) * 60; // время в миллисекундах
			buyFood(increase, time);
		}

		if (card.dataset.name == 'computer') {
			if (buyedDetails !== undefined) {
				if (buyedDetails.includes(card.dataset.index)) {
					card.querySelector('.error-out').textContent = 'уже куплено';
					return;
				}
			}
			console.log(card.dataset.index);
			money -= price; // покупка
			buyedDetails.push(card.dataset.index);
			card.querySelector('.succes').textContent = 'куплено'; // успешно
			buyDetails(increase);
		}

		update();
		saveLocalData();
	});
});
// запись данных еды в localStorage
const buyFood = (increase, time) => {
	const food = {
		increase: increase,
		time: time,
		isFood: true,
	};
	localStorage.setItem('foodPurchases', JSON.stringify(food));
};

// запись данных деталей в localStorage
const buyDetails = (increase) => {
	// проверка на наличие деталей и перезапись
	if (localStorage.getItem('details') !== null) {
		const raw = localStorage.getItem('details');
		const detailsData = JSON.parse(raw);
		const details = {
			detailIncrease: increase,
			buyedDetails: buyedDetails,
		};
		localStorage.setItem('details', JSON.stringify(details));
		return;
	}
	// если деталей нет то создаем новую ячейку в localStorage
	const details = {
		detailIncrease: increase,
		buyedDetails: buyedDetails,
	};
	localStorage.setItem('details', JSON.stringify(details));
};

const update = () => {
	headerLvlOut.textContent = Math.floor(lvl);
	headerMoneyOut.textContent = money;
	lvlFilter();
};

// сохранение данных при выходе из магазина
btnBack.addEventListener('click', () => {
	saveLocalData();
});

const saveLocalData = () => {
	localData = {
		money: money,
		salary: salary,
		lvl: lvl,
		lvlOfSpeed: lvlOfSpeed,
		isBoost: isBoost,
	};
	localStorage.setItem('data', JSON.stringify(localData));
};

// выгразка данных из localStorage в переменные
window.addEventListener('load', () => {
	// деструктуризация localData
	const data = localStorage.getItem('data');
	if (data == null) return;
	({ lvl, lvlOfSpeed, money, salary, isBoost } = JSON.parse(data));
	buyDetails();
	const details = localStorage.getItem('details');
	if (details == null) return;
	({ buyedDetails } = JSON.parse(details));

	// обнуление счетчика покупок еды если еда закончилась
	if (localStorage.getItem('foodPurchases') == null) {
		isFood = false;
		update();
		return;
	} else {
		isFood = true;
	}
	lvlFilter();
	update();
});

//===============dropdown=============

// все элементы меню
const dropdown = document.querySelector('.dropdown'),
	select = dropdown.querySelector('.select'),
	caret = dropdown.querySelector('.caret'),
	menu = dropdown.querySelector('.dropdown__menu'),
	options = dropdown.querySelectorAll('.dropdown__menu li'),
	selected = dropdown.querySelector('.selected');

// открытие меню
select.addEventListener('click', () => {
	select.classList.toggle('select-clicked');
	caret.classList.toggle('caret-rotate');
	menu.classList.toggle('dropdown__menu-open');
});

options.forEach((option) => {
	option.addEventListener('click', () => {
		// изменение текста
		select.textContent = option.textContent;

		// закрытие меню
		select.classList.remove('select-clicked');
		caret.classList.remove('caret-rotate');
		menu.classList.remove('dropdown__menu-open');

		options.forEach((option) => {
			option.classList.remove('active');
		});
		option.classList.add('active');

		// запуск фильтра по data-name
		filter(option);
	});
});

//фильтр
const filter = (option) => {
	product.forEach((elem) => {
		elem.classList.remove('disabled');
		if (option.dataset.name == 'all') {
			return;
		} else if (option.dataset.name !== elem.dataset.name) {
			elem.classList.add('disabled');
		}
	});
	lvlFilter();
};

// фильтр по лвлу
const lvlFilter = () => {
	product.forEach((card) => {
		card.classList.remove('filter-disabled');
		if (card.dataset.lvl > lvl) {
			card.classList.add('filter-disabled');
		}
	});
};
lvlFilter();
