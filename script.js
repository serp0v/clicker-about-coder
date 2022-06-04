////////////////////////////////////Черкасов Александр//////////////////////////////////////////////////
/////////////////////////////////////vk:@danilserpov////////////////////////////////////////////////////

//navbar

let mainbar = document.getElementById('mainbar');

const accoChildren = document.querySelectorAll('.accordionClose');
accoChildren.forEach(accoChildren=>mainbar.addEventListener('click', function(){
    mainbar.classList.toggle('mainbarClose');
    mainbar.classList.toggle('mainbarOpen');

    accoChildren.classList.toggle('accordionClose');
    accoChildren.classList.toggle('accordionOpen');
}));

// pre Text Closer(i'm a guest)

const closeGuest = document.querySelector('#amaGuest');
const preText = document.querySelector('#pre');

const contentWrapper = document.querySelector('#contentWrapper');

closeGuest.onclick = function preMenuCloser() {
    setTimeout(() => {
        preText.classList.add('preClose');
        preText.remove();
    }, 950);
    preText.classList.remove('preOpen');
    preText.classList.add('preCloseAnimation');
    contentWrapper.classList.add('contentWrapAnimation');
}

// shopZoneSwithcer

const shopButton = document.getElementById('shopButton');
const shopMenu = document.getElementById('shopMenu');

shopButton.onclick = function shopModeSwitcher() {
    shopMenu.classList.toggle('shopClose');
    shopMenu.classList.toggle('shopOpen');
}

// clickZoneSwitcher

const cZo = document.getElementById('clickZoneController');
const clickZone = document.getElementById('clickZone');

cZo.onclick = function shopModeSwitcher() {
    clickZone.classList.toggle('clickZone');
    clickZone.classList.toggle('clickZoneOff');
}

// логика +1 за клик

// достаю ячейку где будет отображаться количество золота
// обозначаю доп.переменную чтобы дать намбер ячейке
// вписываю 0 в ячейку, чтобы далее проводить с ним операции
// пишу функцию чтобы при клике по click зоне добавлялась единица

const goldCell = document.getElementById("goldCell"); 

let coinCount = 0;

goldCell.innerHTML = coinCount;

clickZone.onclick = function clickZoneClick() {
    coinCount++;
    goldCell.innerHTML = coinCount;
}

// логика увеличения счетчика добычи в секунду

// достаю первый айтем из магазина
// обозначаю доп.переменную чтобы дать намбер первому шоп айтему
// достаю метрик где будет отображаться КОЛИЧЕСТВО ПРИБАВЛЯЕМОГО В СЕКУНДУ золота
// обозначаю доп.переменную чтобы дать намбер ячейке МЕТРИКА
// вывод изначального значения метрика
// ф-я прибалвения 5 при покупке первого айтема

firstShopItem = document.getElementById('firstShopItem');

coinCountCell = document.getElementById('coinCountCell');

let firstShopItemCost = 10;

let coinCountMetric = 0;

coinCountCell.innerHTML = coinCountMetric + "/sec";

// схожие айтемы в шопе, юзануть делегирование

firstShopItem.onclick = function firstShopItemClick() {
    coinCountMetric = coinCountMetric + 5;
    coinCountCell.innerHTML = coinCountMetric + "/sec";
    // логика отмены транзакции при недостаточном колве валюты
    let valueChecker = (coinCount >= 10) ? console.log("passed!") : alert('мало деняк');
    // логика отнимания валюты при нажатии на покупку
    coinCount = coinCount - 10;
    goldCell.innerHTML = coinCount;
}

// логика добавления валюты каждую секунду в размере счетчика добычи в секунду
// логика увеличения цены в магазине (каждый раз увеличение в 1.07-1.15 раза и округление)

// сундук - каждое опред кол-во кликов доступен прикол из сундука
// открывание менюшки дропа при "раннем клике"(досрочном) на сундук