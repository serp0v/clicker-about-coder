////////////////////////////////////Черкасов Александр//////////////////////////////////////////////////
/////////////////////////////////////vk:@danilserpov////////////////////////////////////////////////////

//navbar

let menushka = document.getElementById('menushka');
let mainbar = document.getElementById('mainbar');

// юзануть forEach, ускорит код 

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

    // bgc render
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
