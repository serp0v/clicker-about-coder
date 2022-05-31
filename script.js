////////////////////////////////////Черкасов Александр//////////////////////////////////////////////////
/////////////////////////////////////vk:@danilserpov////////////////////////////////////////////////////



//  navbar

let menushka = document.getElementById('menushka');
let mainbar = document.getElementById('mainbar');

// юзануть forEach, ускорит код 

const navbarFirst = document.querySelector('#navbar1')
const navbarSecond = document.querySelector('#navbar2')
const navbarThird = document.querySelector('#navbar3')
const navbarFourth = document.querySelector('#navbar4')
const navbarFifth = document.querySelector('#navbar5')

// const accoChildren = document.querySelectorAll('.accordionClose');
// accoChildren.forEach(b=>b.addEventListener('click', mainbarSwitcher()));

mainbar.onclick = function() {
    mainbar.classList.toggle('mainbarClose');
    mainbar.classList.toggle('mainbarOpen');

    navbarFirst.classList.toggle('accordionClose');
    navbarSecond.classList.toggle('accordionClose');
    navbarThird.classList.toggle('accordionClose');
    navbarFourth.classList.toggle('accordionClose');
    navbarFifth.classList.toggle('accordionClose');

    //это пишется в две строки

    navbarFirst.classList.toggle('accordionOpen');
    navbarSecond.classList.toggle('accordionOpen');
    navbarThird.classList.toggle('accordionOpen');
    navbarFourth.classList.toggle('accordionOpen');
    navbarFifth.classList.toggle('accordionOpen');
};





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

































