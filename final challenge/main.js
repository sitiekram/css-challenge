 const navtog=document.querySelector('.nav--toggle');
 const nav=document.querySelector('.nav')
navtog.addEventListener('click',() =>
{
 nav.classList.toggle('nav--visibile');
})