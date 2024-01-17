
const myslide = document.querySelectorAll('.myslider');
const dot = document.querySelectorAll('.dot');
const nav = document.getElementById('nav');
const logoName = document.getElementById('logoName')
const header = document.getElementById('header');
const profileIcon = document.getElementById('profileIcon')
const profileLetter = document.getElementById('profileLetter');
const logoImage = document.getElementById('logoImage')


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
        if (x == 1) { 
            navlink1.style.color= "black"
            navlink2.style.color= "black"
            navlink3.style.color= "black"
            navlink4.style.color= "black"
            navlink5.style.color= "black"
            logoName.style.color = "black"
            header.style.borderColor = "black"
            profileLetter.style.color ="black"
            logoImage.src ="../IMAGES/pot.png"

            navlink1.addEventListener('mouseover', ()=> {
                navlink1.style.borderBottom= "black 1px solid"
            })

            navlink1.addEventListener('mouseout', ()=> {
                navlink1.style.borderBottom= "none"
            })

            navlink2.addEventListener('mouseover', ()=> {
                navlink2.style.borderBottom= "black 1px solid"
            })

            navlink2.addEventListener('mouseout', ()=> {
                navlink2.style.borderBottom= "none"
            })

            navlink3.addEventListener('mouseover', ()=> {
                navlink3.style.borderBottom= "black 1px solid"
            })

            navlink3.addEventListener('mouseout', ()=> {
                navlink3.style.borderBottom= "none"
            })

            navlink4.addEventListener('mouseover', ()=> {
                navlink4.style.borderBottom= "black 1px solid"
            })

            navlink4.addEventListener('mouseout', ()=> {
                navlink4.style.borderBottom= "none"
            })

        } else{
            navlink1.style.color= "white"
            navlink2.style.color= "white"
            navlink3.style.color= "white"
            navlink4.style.color= "white"
            navlink5.style.color= "white"
            profileIcon.style.backgroundColor ="white"
            logoName.style.color = "white"
            header.style.borderColor = "white"
            profileLetter.style.color ="black"
            logoImage.src ="../IMAGES/wpot.png"
            
            navlink1.addEventListener('mouseover', ()=> {
                navlink1.style.borderBottom= "white 1px solid"
            })

            navlink1.addEventListener('mouseout', ()=> {
                navlink1.style.borderBottom= "none"
            })

            navlink2.addEventListener('mouseover', ()=> {
                navlink2.style.borderBottom= "white 1px solid"
            })

            navlink2.addEventListener('mouseout', ()=> {
                navlink2.style.borderBottom= "none"
            })

            navlink3.addEventListener('mouseover', ()=> {
                navlink3.style.borderBottom= "white 1px solid"
            })

            navlink3.addEventListener('mouseout', ()=> {
                navlink3.style.borderBottom= "none"
            })

            navlink4.addEventListener('mouseover', ()=> {
                navlink4.style.borderBottom= "white 1px solid"
            })

            navlink4.addEventListener('mouseout', ()=> {
                navlink4.style.borderBottom= "none"
            })

        }
    dot[counter - 1].classList.add('active');
}
    
    


let copy = document.querySelector(".partners-logos-slide").cloneNode(true)
document.querySelector(".partners-logos").appendChild(copy)



let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
}


logoName.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/trial_index.html'
})

const signUp = document.getElementById('sign-up');

signUp.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/register.html'
})

const login = document.getElementById('login');
login.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/login.html'
})



const token = localStorage.getItem('token')
const localName = localStorage.getItem('username');
const localRole = localStorage.getItem('roles');
const userbtn  = document.getElementById('user-btn');
console.log(localName);
profileLetter.innerText = localName.charAt(0).toUpperCase();


if(!token){
    console.log("No token");
    profileIcon.style.display = "none";
    signUp.style.display = "block"
    login.style.display = "block"

} else{
    console.log("token");
    profileIcon.style.display = "block";
    login.style.display = "none"
    signUp.style.display = "none"
}

profileIcon.addEventListener('click', ()=>{
    window.location.href = `../HTMLS/trial${localRole}.html`
})


