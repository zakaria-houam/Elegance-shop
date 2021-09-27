function scrollHeader(){
    const nav = document.querySelector('header')
    
    if(this.scrollY >= 100) nav.classList.add('shadow'); else nav.classList.remove('shadow')
}
window.addEventListener('scroll', scrollHeader);
var menu=document.querySelector(".menu");
var list = document.querySelector(".nav-bar .nav .list");
menu.addEventListener('click',function(){
    list.classList.toggle('show');
})
list.addEventListener('click',function(){
    list.classList.toggle('show');
})