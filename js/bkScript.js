if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback.apply(this, [this[i], i, this]);
        }
    };
}

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
var navMenuContainer=document.querySelector('.navMenuContainer'),
    headerNav=document.querySelector('.header__top__nav ul');


navMenuContainer.addEventListener('click',function () {
    navMenuContainer.classList.toggle('makeCross');
    headerNav.classList.toggle('hideNav')
});

//Form Success Message Display
var formSubmitButton=document.querySelector('.formSubmitButton'),
    successMessage=document.querySelector('.successMessage');


formSubmitButton.onsubmit=function (e) {
    formSubmitButton.setAttribute('hidden', '');
    successMessage.removeAttribute('hidden');
};

//popup Button

var cookiesBtn=document.querySelector('.cookiesBtn'),
    cookiesPopup=document.querySelector('.cookiesPopup');


cookiesBtn.onclick=function (e) {
    e.preventDefault();
    cookiesPopup.classList.add('hide');
}


var scrollTopButton=document.querySelector('.scrollTopButton');

scrollTopButton.onclick=function (e) {
    console.log('clicked')
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

var growWitUsBtns=document.querySelectorAll('.header__content__btns a');


growWitUsBtns.forEach(function (btn) {

    btn.addEventListener('click',function (e) {
        e.preventDefault();

        scrollToSection('sectionContactUs');
    })

});



var serviceLi=document.querySelector('.serviceLi'),
    aboutUsLi=document.querySelector('.aboutUsLi'),
    contactUsLi=document.querySelector('.contactUsLi');


serviceLi.addEventListener('click',function (e) {
    e.preventDefault();
    scrollToSection('sectionServices');
});
aboutUsLi.addEventListener('click',function (e) {
    e.preventDefault();
    scrollToSection('sectionSites');
});
contactUsLi.addEventListener('click',function (e) {
    e.preventDefault();
    scrollToSection('sectionContactUs');
});




function scrollToSection(sectionID){
    var sect=document.getElementById(sectionID),
        sectY=(sect.getClientRects()[0].top)+window.pageYOffset;


    window.scrollTo({
        top: sectY,
        left: 0,
        behavior: 'smooth'
    });

}


var headerLi=document.querySelectorAll('.header__top__nav li'),
    headerul=document.querySelector('.header__top__nav ul');

headerLi.forEach(function (ele) {
    ele.onclick=function () {
        headerul.classList.add('hideNav');
        navMenuContainer.classList.remove('makeCross')
    }
})
