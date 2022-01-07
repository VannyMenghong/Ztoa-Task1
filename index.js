//Categorie hover 
let menu = document.querySelector('#menu');
let dropdownMenu = document.querySelector('#dropdown');

menu.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
})

//responsive bar 
let bars = document.querySelector('#bars');
let dropdownMenu2 = document.querySelectorAll('.dropdonwMenu2');

bars.addEventListener('click', function () {
    dropdownMenu2[0].classList.toggle('show2')
})