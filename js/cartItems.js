/*____cart-items-click-show____*/
let cartList = document.querySelector('.cart-click-area');
let cartListBox = document.querySelector('.cart-list');
let traingle2 = document.querySelector('.triangle-up2');

cartList.addEventListener('click', function () {
    traingle2.classList.toggle('show5')
    cartListBox.classList.toggle('show5')
})          