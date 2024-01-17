(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();

    // testimonial carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            " "
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

})(jQuery);



const nav = document.getElementById('nav');

document.querySelector('#menuicon').onclick = () =>{
    console.log("huuh");
    nav.classList.toggle('active')
}


const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');
const header = document.getElementById('header');



let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide(){
    counter += 1;
    slidefun(counter)
}
function plusSlides(n){
    counter += n;
    slidefun(counter);
    resetTimer()
}
function currentSlide(n){
    counter = n;
    slidefun(counter);
    resetTimer();
}
function resetTimer(){
    clearInterval(timer)
    timer = setInterval(autoslide, 8000);
}

function slidefun(n){
    let i;
    for (let i = 0; i < myslide.length; i++) {
        myslide[i].style.display ="none";
    }
    for (let i = 0; i < dot.length; i++) {
       dot[i].classList.remove('active');
    }
    if (n > myslide.length) {
        counter = 1
    }
    if (n < 1) {
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    let x = counter -1
    dot[counter - 1].classList.add('active');
}
    






function Planters(){
    const category = "Planters"
    localStorage.setItem("categoryImage",category)

    window.location.href="./trial_explore.html"
}


function Tableware(){
    const category = "Tableware"
    localStorage.setItem("categoryImage",category)

    window.location.href="./trial_explore.html"
}


function Cookware(){
    const category = "Cookware"
    localStorage.setItem("categoryImage",category)

    window.location.href="./trial_explore.html"
}


function Decorative_Pieces(){
    const category = "Decorative Pieces"
    localStorage.setItem("categoryImage",category)

    window.location.href=".trial_explore.html"
}

    


// let copy = document.querySelector(".partners-logos-slide").cloneNode(true)
// document.querySelector(".partners-logos").appendChild(copy)



logoName.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/index.html'
})





const token = localStorage.getItem('token')
const localName = localStorage.getItem('username');
const localRole = localStorage.getItem('roles');
// const userbtn  = document.getElementById('user-btn');
// console.log(localName);


if(!token){
    const signUp = document.getElementById('Sign-UpBtn');
    signUp.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/register2.html'
    })
    console.log("No token");
    profileIcon.style.display = "none";
    signUp.style.display = "block"

} else{
    const signUp = document.getElementById('Sign-UpBtn');
    console.log("token");
    profileIcon.style.display = "block";
    signUp.style.display = "none";
    profileLetter.innerText = localName.charAt(0).toUpperCase();
    profileIcon.addEventListener('click', ()=>{
        window.location.href = `../HTMLS/trial_dashboard${localRole}.html`
    })

}



window.onscroll = function() {myFunction()};

function myFunction() {
    const token = localStorage.getItem('id')
  if (document.documentElement.scrollTop > 450) {
    console.log("jjijij");
    navlink1.style.color= "black"
    navlink2.style.color= "black"
    navlink3.style.color= "black"
    navlink4.style.color= "black"
    navlink5.style.color= "black"
    logoName.style.color = "black"
    header.style.borderColor = "black"
    if (!token) {
        SignUpBtn.style.backgroundColor = "black"
    SignUpBtninner.style.color = "white"
    } else {
        profileIcon.style.backgroundColor ="black"
        profileLetter.style.color ="white"
    }
  }
else{
    console.log("else");
    navlink1.style.color= "white"
    navlink2.style.color= "white"
    navlink3.style.color= "white"
    navlink4.style.color= "white"
    navlink5.style.color= "white"
    logoName.style.color = "white"
    header.style.borderColor = "white"
    if (!token) {
        SignUpBtn.style.backgroundColor = "white"
    SignUpBtninner.style.color = "black"
    } else {
        profileIcon.style.backgroundColor ="white"
        profileLetter.style.color ="black"
    }
}
}
