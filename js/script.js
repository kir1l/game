// текста кода
const htmlCode = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="shortcut icon" href="css/favicon.ico">
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
                </div>
                <nav class="header__navbar navbar-header">
                    <ul class="navbar-header__navigation">
                        <li class="navbar-header__item"><a href="index.html" class="navbar__link underline">Главная</a>
                        </li>
                        <li class="navbar-header__item"><a href="products.html" class="navbar__link underline">Продукты</a></li>
                        <li class="navbar-header__item"><a href="blog.html" class="navbar__link underline">Блог</a></li>
                        <li class="navbar-header__item"><a href="#" class="navbar__link underline">Контакты</a></li>
                    </ul>

                    <div class="header__dropdown">
                        <label for="touch"><span class="change"><img class="flag" src="css/images/header/russia.svg"
                                    alt="flag">
                                RU <img class="arrow" src="css/images/header/dropdown.svg" alt="arrow"></span></label>
                        <input type="checkbox" id="touch">
                        <ul class="slide">
                            <li>
                                <a href="#"><img src="css/images/header/usa.png" alt="english">EN</a>
                            </li>
                            <li>
                                <a href="#"><img src="css/images/header/japanese.png" alt="japanese">JA</a>
                            </li>
                            <li>
                                <a href="#"><img src="css/images/header/korea.png" alt="korea">KR</a>
                            </li>
                            <li>
                                <a href="#"><img src="css/images/header/germany.png" alt="germany">DE</a>
                            </li>
                            <li>
                                <a href="#"><img src="css/images/header/spain.png" alt="spain">SP</a>
                            </li>
                        </ul>
                    </div>
                    <div class="header__social">
                        <a href="#" class="social__item"><img src="css/images/header/telegram.svg" alt="telegram"></a>
                        <a href="#" class="social__item"><img src="css/images/header/twiter.svg" alt="twiter"></a>
                        <a href="#" class="social__item"><img src="css/images/header/youtube.svg" alt="youtube"></a>
                        <a href="#" class="social__item"><img src="css/images/header/whatsup.svg" alt="whatsup"></a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    <div id="nav" class="navigation">
        <div class="navigation__inner">
            <div class="nav__body">
                <div class="nav__nav">
                    <div class="nav__logo">
                        <a href="#" class="logo__link">
                            <img src="css/images/header/Logo.svg" alt="TrustCrypt">
                        </a>
                    </div>
                    <ul class="nav__navigation">
                        <li class="navbar-header__item"><a href="index.html" class="navbar__link underline">Главная</a>
                        </li>
                        <li class="navbar-header__item"><a href="products.html" class="navbar__link underline">Продукты</a></li>
                        <li class="navbar-header__item"><a href="#" class="navbar__link underline">Контакты</a></li>
                        <li class="navbar-header__item"><a href="blog.html" class="navbar__link underline">Блог</a></li>
                    </ul>
                </div>
                <div class="header__social">
                    <a href="#" class="social__item"><img src="css/images/header/telegram.svg" alt="telegram"></a>
                    <a href="#" class="social__item"><img src="css/images/header/twiter.svg" alt="twiter"></a>
                    <a href="#" class="social__item"><img src="css/images/header/youtube.svg" alt="youtube"></a>
                    <a href="#" class="social__item"><img src="css/images/header/whatsup.svg" alt="whatsup"></a>
                </div>
            </div>
        </div>
    </div>
    <input type="checkbox" id="show">
    <label class="menu" for="show">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </label>
    <main class="main">
        <section class="main__top top">
            <div class="top__container">
                <div class="top__body" data-aos="fade-right" data-aos-duration="900">
                    <div class="top__heading heading-left">
                        <h1 class="top__title">Передовая кибербезопасность для любой компании</h1>
                        <p class="top__subtitle">Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса. </p>
                        <div class="top__button button">Подробнее</div>
                    </div>
                    <div class="top__img"><img src="css/images/top/1.png" alt=""></div>
                </div>
                <div class="top__body sub-top__body" data-aos="fade-right" data-aos-duration="1200">
                    <div class="top__img"><img src="css/images/top/2.png" alt=""></div>
                    <div class="top__heading heading-right">
                        <h1 class="top__title">Кибербезопасность нового поколения
                            <h1>
                                <p class="top__subtitle">Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.</p>
                    </div>

                </div>
            </div>
        </section>
        <section class="main__tools tools" data-aos="fade-up">
            <div class="tools__container">
                <div class="tools__body">
                    <div class="tools__content">
                        <h3 class="tools__title">Инструменты</h3>
                        <div class="tools__text">Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.</div>
                    </div>
                    <div class="tools__logos">
                        <img src="css/images/tools/metalsploit.svg" alt="metalsploit">
                        <img src="css/images/tools/metalsploit.svg" alt="metalsploit">
                        <img src="css/images/tools/metalsploit.svg" alt="metalsploit">
                        <img src="css/images/tools/metalsploit.svg" alt="metalsploit">
                    </div>
                </div>
            </div>
            Я НЕ ПОНИМАЮ ЧТО Я ПИШУ, ПОМОГИТЕ!!!!!!!!!!!!!!!!!!
        </section>
        <section class="main__security security">
            <div class="security__container">
                <div class="security__body">
                    <div class="security__content" data-aos="fade-up-left">
                        <h4 class="security__title">Наши продукты направлены на вашу безопасность.</h4>
                        <div class="security__text">Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.</div>
                    </div>
                    <div class="security__items item-security" data-aos="fade-right" data-aos-duration="900">
                        <div class="item-security__body" data-tilt data-tilt-glare data-tilt-max-glare="0.2" data-tilt-reverse="true">
                            <div class="item-security__logo"><img src="css/images/security/1.svg" alt="logo"></div>
                            <div class="item-security__text">Анонимность</div>
                        </div>
                        <div class="item-security__body" data-tilt data-tilt-glare data-tilt-max-glare="0.2" data-tilt-reverse="true">
                            <div class="item-security__logo"><img src="css/images/security/2.svg" alt="logo"></div>
                            <div class="item-security__text">Проверка на наличие угроз</div>
                        </div>
                        <div class="item-security__body" data-tilt data-tilt-glare data-tilt-max-glare="0.2" data-tilt-reverse="true">
                            <div class="item-security__logo"><img src="css/images/security/3.svg" alt="logo"></div>
                            <div class="item-security__text">Обнаружение и предотвращение аттак</div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
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
	headerLvlOut = document.querySelector('.header__lvl-out'); // вывод уровня в хедер

let lvlOfSpeed = 200, // колличество букв по нажатии клавиши
	clickCounter = 0, // колличество нажатий
	salary = 100, // зарплата за 1 задание
	money = 100,
	lvl = 1,
	localData = {}, // объект с данными
	isWork = false, // проверка на работу
	timeCount,
	timeInterval,
	isBoost = false;

//старт задания
startWorkModal.addEventListener('click', () => {
	startWorkModal.classList.add('disabled');
	isWork = true;
	work();
});

const work = () => {
	document.addEventListener('keydown', workProcess);
};

const workProcess = () => {
	// заполнение textarea по нажатию любой клавиши
	if (!isWork) return;
	clickCounter += lvlOfSpeed;
	textarea.value = htmlCode.substring(0, clickCounter);
	textarea.scrollTop = textarea.scrollHeight;

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
		lvlOfSpeed -= increace;
		localStorage.removeItem('foodPurchases');
		document.querySelector('.timer').textContent = '';
		isBoost = false;
		update();
		saveLocalData();
	}
};

// применение купленных улучшений еды
const giveFood = () => {
	const foodData = localStorage.getItem('foodPurchases');
	if (foodData == null) return;

	let { increase, time } = JSON.parse(foodData);

	// запуск таймера отсчета действия еды
	timeCount = time;
	timeInterval = setInterval(setTimer, 1000, increase);
	if (isBoost) return;
	lvlOfSpeed += increase;
	isBoost = true;
	update();
};

const giveDetails = () => {
	// применение купленных улучшений деталей
	const raw = localStorage.getItem('details');
	if (raw == null) return;
	let { detailIncrease } = JSON.parse(raw);
	lvlOfSpeed += detailIncrease;
	localStorage.removeItem('details');
};

// выгрузка данных в переменные
window.addEventListener('load', () => {
	const data = localStorage.getItem('data');
	if (data == null) return;
	({ lvl, lvlOfSpeed, money, salary, isBoost } = JSON.parse(data)); // деструктуризация localData в переменные

	giveFood();
	giveDetails();

	saveLocalData();
	update();
});
