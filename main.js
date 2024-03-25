let form=document.querySelector('.search-form');
let loginForm=document.querySelector('.login-form');
let shoppingCart=document.querySelector('.shopping-cart');
let navBar=document.querySelector('.navbar'); 
let regForm=document.querySelector('.regForm'); 
document.querySelector('#search-btn').onclick= () =>
{
    form.classList.toggle('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
}

document.querySelector('#shopping-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.toggle('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
}

document.querySelector('#login-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.toggle('activ');
    navBar.classList.remove('activ');
}
 
document.querySelector('#menu-btn').onclick= () =>
{
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.toggle('activ');
}
document.querySelector('#reg').onclick= () =>
{
    regForm.classList.toggle('activ');
    form.classList.remove('activ');
    shoppingCart.classList.remove('activ');
    loginForm.classList.remove('activ');
    navBar.classList.remove('activ');
}

