"use strict";"function"!=typeof Array.prototype.forEach&&(Array.prototype.forEach=function(e){for(var t=0;t<this.length;t++)e.apply(this,[this[t],t,this])}),window.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=Array.prototype.forEach);var navMenuContainer=document.querySelector(".navMenuContainer"),headerNav=document.querySelector(".header__top__nav ul");navMenuContainer.addEventListener("click",function(){navMenuContainer.classList.toggle("makeCross"),headerNav.classList.toggle("hideNav")});var formSubmitButton=document.querySelector(".formSubmitButton"),successMessage=document.querySelector(".successMessage");formSubmitButton.onsubmit=function(e){formSubmitButton.setAttribute("hidden",""),successMessage.removeAttribute("hidden")};var cookiesBtn=document.querySelector(".cookiesBtn"),cookiesPopup=document.querySelector(".cookiesPopup");cookiesBtn.onclick=function(e){e.preventDefault(),cookiesPopup.classList.add("hide")};var scrollTopButton=document.querySelector(".scrollTopButton");scrollTopButton.onclick=function(e){console.log("clicked"),window.scrollTo({top:0,left:0,behavior:"smooth"})};var growWitUsBtns=document.querySelectorAll(".header__content__btns a");growWitUsBtns.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),scrollToSection("sectionContactUs")})});var serviceLi=document.querySelector(".serviceLi"),aboutUsLi=document.querySelector(".aboutUsLi"),contactUsLi=document.querySelector(".contactUsLi");function scrollToSection(e){var t=document.getElementById(e).getClientRects()[0].top+window.pageYOffset;window.scrollTo({top:t,left:0,behavior:"smooth"})}serviceLi.addEventListener("click",function(e){e.preventDefault(),scrollToSection("sectionServices")}),aboutUsLi.addEventListener("click",function(e){e.preventDefault(),scrollToSection("sectionSites")}),contactUsLi.addEventListener("click",function(e){e.preventDefault(),scrollToSection("sectionContactUs")});var tm,headerLi=document.querySelectorAll(".header__top__nav li"),headerul=document.querySelector(".header__top__nav ul");function addMap(){clearTimeout(tm),document.querySelector(".sectionContactUs__address").innerHTML+=' <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473493.904270967!2d-74.25308004039539!3d40.760563074617714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258c76b0188c9%3A0xcb706a26ce00f3b0!2sYork+Ave%2C+New+York%2C+NY%2C+USA!5e0!3m2!1sen!2sin!4v1539967026246" width="100%" height="265" frameborder="0" style="border:0;" allowfullscreen=""></iframe>'}headerLi.forEach(function(e){e.onclick=function(){headerul.classList.add("hideNav"),navMenuContainer.classList.remove("makeCross")}}),window.onload=function(){tm=setTimeout(addMap,1e3)};