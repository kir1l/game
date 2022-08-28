// текста кода
const rawHtmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TrustCrypt</title>
</head>

<body>
    <div id="particles-js"></div>
    <header class="header">
        <div class="header__container">
            <div class="header__body">
                <div class="header__logo">
                    <a href="#" class="logo__link">
                        <img src="css/images/header/Logo.svg" alt="TrustCrypt">
                    </a>
                <div class="header__dropdown">
                    <label for="touch"><span class="change"><img class="flag" src="css/images/header/russia.svg"
                                alt="flag">
                            RU <img class="arrow" src="css/images/header/dropdown.svg" alt="arrow"></span></label>
                    <input type="checkbox" id="touch">
                    <ul class="slide">
                        <li>
                                <a href="#"><img src="css/images/header/usa.png" alt="english">EN</a>                            </li>
                        <li>
                            <a href="#"><img src="css/images/header/japanese.png" alt="japanese">JA</a>
                        </li>
                        <li>
                            <a href="#"><img src="css/images/header/korea.png" alt="koea">KR</a>
                        </li>
                        <li>
                            <Я НЕ ПОНИМАЮ ЧТО Я ПИШУ, ПОМОГИТЕ!!!!!!!!!!!!!!!!!!
                        </li>
                        <li>
                             <a href="#"><img src="css/images/header/spain.png" alt="spain">SP</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </main>
    </body>
</html>
`;

const textarea = document.getElementById('code-box'), //куда вписывается код
	startWorkModal = document.querySelector('.start-work'), // модалка "писать код"
	salaryOut = document.querySelector('.salry-out'), // вывод зарплаты в модалку
	moneyOut = document.querySelector('.money-out'), // вывод денег в модалку
	endWorkModal = document.querySelector('.end-work'), // модалка по завершении работы
	modalBtnClose = document.querySelector('.modal__close'), // кнопка закрытия модалки
	headerMoneyOut = document.querySelector('.header__money-out'), // вывод денег в хедер
	headerLvlOut = document.querySelector('.header__lvl-out'), // вывод уровня в хедер
	statistic = document.querySelector('.statistic'),
	statisticOut = document.getElementById('statistic-out'),
	laptop = document.querySelector('.laptop');

let lvlOfSpeed = 10, // колличество букв по нажатии клавиши
	clickCounter = 0, // колличество нажатий
	salary = 100, // зарплата за 1 задание
	money = 100,
	lvl = 1,
	localData = {}, // объект с данными
	isWork = false, // проверка на работу
	timeCount,
	htmlCode,
	timeInterval,
	isBoost = false,
	pressedKey = 'ControlLeft';

statistic.classList.add('disabled');

// умнее не придумал, если есть идеи то ктдай pull request

//старт задания
startWorkModal.addEventListener('click', () => {
	startWorkModal.classList.add('disabled');
	isWork = true;
	startWork();
});

const startWork = () => {
	htmlCode = rawHtmlCode.repeat(lvl);
	statistic.classList.remove('disabled');
	statisticOut.textContent = htmlCode.length - clickCounter;
	document.addEventListener('keydown', workProcess, event);
	laptop.addEventListener('click', workProcess, event);
};

const workProcess = (ev) => {
	if (window.innerWidth > 750) {
		if (ev.code == pressedKey) return;
		pressedKey = ev.code;
	}
	// заполнение textarea по нажатию любой клавиши
	if (!isWork) return;
	clickCounter += lvlOfSpeed;
	textarea.value = htmlCode.substring(0, clickCounter);
	textarea.scrollTop = textarea.scrollHeight;
	statisticOut.textContent = htmlCode.length - clickCounter;
	// завершение работы
	if (textarea.value === htmlCode) {
		endWork();
		return;
	}
};

// заполнение всего по завершении
const endWork = () => {
	// обнуление задания
	isWork = false;
	clickCounter = 0;
	textarea.value = '';
	statistic.classList.add('disabled');
	// получение вознаграждения
	money += salary;
	lvl = Number((lvl + 0.1).toFixed(1));

	update();
	saveLocalData();

	// модальное окно
	endWorkModal.classList.remove('disabled');
	modalBtnClose.addEventListener('click', () => {
		endWorkModal.classList.add('disabled');
		startWorkModal.classList.remove('disabled');
	});
};

// функция обновления (говорит сама за себя)
const update = () => {
	headerLvlOut.textContent = Math.floor(lvl);
	salaryOut.textContent = salary;
	moneyOut.textContent = money;
	headerMoneyOut.textContent = money;
	document.querySelector('.header__speed-out').textContent = lvlOfSpeed;
};

// функция сохранения данных
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

// таймер
const setTimer = (increace) => {
	const minutes = Math.floor(timeCount / 60);
	let seconds = timeCount % 60;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	document.querySelector('.timer').textContent = `${minutes} : ${seconds}`;
	timeCount--;
	if (timeCount < 0) {
		clearInterval(timeInterval);
		lvlOfSpeed /= increace;
		localStorage.removeItem('foodPurchases');
		document.querySelector('.timer').textContent = '';
		isBoost = false;
		update();
		saveLocalData();
	}
};

// применение купленных улучшений еды
const getFood = () => {
	const foodData = localStorage.getItem('foodPurchases');
	if (foodData == null) return;

	let { increase, time } = JSON.parse(foodData);

	// запуск таймера отсчета действия еды
	timeCount = time;
	timeInterval = setInterval(setTimer, 1000, increase);
	if (isBoost) return;
	lvlOfSpeed *= increase;
	isBoost = true;
	update();
};

const getDetails = () => {
	// применение купленных улучшений деталей
	const raw = localStorage.getItem('details');
	if (raw == null) return;
	let { detailIncrease, buyedDetails } = JSON.parse(raw);
	lvlOfSpeed += detailIncrease;
	detailIncrease = 0;
	const details = {
		detailIncrease: detailIncrease,
		buyedDetails: buyedDetails,
	};
	localStorage.setItem('details', JSON.stringify(details));
};

// выгрузка данных в переменные
window.addEventListener('load', () => {
	const data = localStorage.getItem('data');
	if (data == null) return;
	({ lvl, lvlOfSpeed, money, salary, isBoost } = JSON.parse(data)); // деструктуризация localData в переменные

	getFood();
	getDetails();
	saveLocalData();
	update();
});
