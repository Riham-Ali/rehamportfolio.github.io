const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky" , window.scrollY > 100);
})


$(`.circlechart`).circlechart();

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzLyEgl0dhA3htm01HalqnF5S9thNiHv5hsaqQYedYRaWalqRTpKJYeWOJ-0HgQFOAw/exec'
const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
   
form.addEventListener('submit' , e=>{
    e.preventDefault()

    console.log(form)
    fetch(scriptURL,{method: 'POST' , body: new FormData(form)})
      .then(Response => {alert('Success' , Response)})
      .catch(error => alert('Error' , error.message))
})