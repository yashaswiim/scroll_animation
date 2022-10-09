let dog =  document.getElementById("dog")
let girl =  document.getElementById("girl")
let sun =  document.getElementById("sun")
let sec = document.getElementById("sec")
let section = document.getElementById("imgs")


window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    sun.style.left = value + 'px';
    sun.style.top = value * 0.5 + 'px';
    if(value < 200){
        dog.style.left = value* 0.75 + 'px';
        girl.style.left = '-' + value * 0.75 + 'px';
    }        
    if(value < 400){
        section.style.top= value*0.4 +'px';
        sec.style.top= value*0.4 +'px';
    }
})