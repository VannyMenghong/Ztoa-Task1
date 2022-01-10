//currency show

let triangle = document.querySelectorAll(".triangle-up");
let currencyItems = document.querySelectorAll(".currency-items");
let navDollar = document.querySelectorAll(".currency");

navDollar[0].addEventListener('click', function () {
    triangle[0].classList.toggle('show3')
    currencyItems[0].classList.toggle('show4')
    // triangle[0].style.opacity = "1"
    // currencyItems[0].style.opacity = "1"
    // triangle[0].style.transition = "0.3s"
    // currencyItems[0].style.transition = "0.3s"
})


//navigation categories 
let menu = document.querySelector('#menu');
let dropdownMenu = document.querySelector('#dropdown');

menu.addEventListener('click', function () {
    dropdownMenu.classList.toggle('show')
})

//responsive navigation 
let bars = document.querySelector('#bars');
let dropdownMenu2 = document.querySelectorAll('.dropdonwMenu2');

bars.addEventListener('click', function () {
    dropdownMenu2[0].classList.toggle('show2')
})


//Cart Items
var child = document.querySelectorAll('.cart-icon')
let item = document.querySelectorAll('.item');
for (var i = 0; i < item.length; i++) {
    child[i].addEventListener('click', function (e) {
        let target = e.target

    })
}

//Cart Items1
// var child1 = document.querySelectorAll('.cart-icon1');
// let item1 = document.querySelectorAll('.item1');
// for (var i = 0; i < item1.length; i++) {
//     child1[i].addEventListener('click', function (ev) {
//         let target1 = ev.target
//         let parent1 = target1.parentElement.parentElement
//         let img1 = parent1.querySelector('img').attributes[0].nodeValue
//         let imgName1 = img1.slice(6)
//         let proName1 = parent1.querySelector('p').firstChild.nodeValue
//         console.log(proName1)
//     })
// }




