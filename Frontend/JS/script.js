let navbar = document.querySelector('.navbar');


document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
    searchForm.classList.remove('active')
}

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
const profileIcon = document.getElementById('profileIcon');
const userbtn  = document.getElementById('user-btn');
const profileLetter = document.getElementById('profileLetter');




function clear(){
    localStorage.removeItem("id")
    localStorage.removeItem("upadatetoken")
    localStorage.removeItem("name")
}
clear()

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

profileLetter.innerText = localName.charAt(0).toUpperCase();
console.log(localName);


const logoName = document.getElementById('logoName');
logoName.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/trial_index.html'
})