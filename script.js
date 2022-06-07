////////////////////////////////////Черкасов Александр//////////////////////////////////////////////////
/////////////////////////////////////vk:@danilserpov////////////////////////////////////////////////////

//navbar menu

let mainbar = document.getElementById('mainbar');

const accoChildren = document.querySelectorAll('.accordionClose');
accoChildren.forEach(accoChildren=>mainbar.addEventListener('click', function(){
    mainbar.classList.toggle('mainbarClose');
    mainbar.classList.toggle('mainbarOpen');

    accoChildren.classList.toggle('accordionClose');
    accoChildren.classList.toggle('accordionOpen');
}));

//navbar shop (right)

let shop = document.getElementById('shop');

const shopChildren = document.querySelectorAll('.shopClose');
shopChildren.forEach(shopChildren=>shop.addEventListener('click', function(){
    shop.classList.toggle('mainbarShopClose');
    shop.classList.toggle('mainbarShopOpen');

    shopChildren.classList.toggle('shopClose');
    shopChildren.classList.toggle('shopOpen');
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

// const shopButton = document.getElementById('shopButton');
// const shopMenu = document.getElementById('shopMenu');

// shopButton.onclick = function shopModeSwitcher() {
//     shopMenu.classList.toggle('shopClose');
//     shopMenu.classList.toggle('shopOpen');
// }

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
    chestClickMetricStart = chestClickMetricStart - 1;
    chestClickMetric.innerHTML = chestClickMetricStart + " до сундука";
    let chestMetricChecker = (chestClickMetricStart == 0) ? chest.style.backgroundColor = "#fff" : console.log("рано!");
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
    
    let valueChecker = (coinCount >= firstShopItemCost) ? console.log("passed!") : alert('мало деняк'); // логика отмены транзакции при недостаточном колве валюты

    coinCount = coinCount - firstShopItemCost;     // логика отнимания валюты при нажатии на покупку
    goldCell.innerHTML = coinCount;
    // логика увеличения цены в магазине (каждый раз увеличение в 1.07-1.15 раза и округление)
    firstShopItemCost = Math.ceil(firstShopItemCost * 1.15);
    firstShopItem.innerHTML = firstShopItemCost;
}

// логика добавления валюты каждую секунду в размере счетчика добычи в секунду

let goldImpact = setInterval(function goldImpacter(){
    coinCount = coinCountMetric + coinCount;
    goldCell.innerHTML = coinCount;
},1000);

// сундук - каждое опред кол-во кликов доступен прикол из сундука

// метрик кликов до сундука
const chest = document.getElementById('chest');

const chestClickMetric = document.getElementById('chestClickMetric');

let chestClickMetricStart = 5;

chestClickMetric.innerHTML = chestClickMetricStart + " до сундука";

// открывание менюшки дропа при "раннем клике"(досрочном) на сундук
// chest.onclick = function chestIsOpen() {

// }
// 14. запуск всего по ама гвест