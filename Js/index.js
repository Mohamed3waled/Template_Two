let Ul_list = document.querySelector('.list');
let links  = document.querySelectorAll('nav ul li a ')
let bar  = document.querySelector('.bar')
let Up = document.querySelector('.Up')



bar.addEventListener('click' , ()=> {
    Ul_list.classList.toggle('Active_Hight')
})

links.forEach((e)=> {
    e.addEventListener('click' , ()=> {
        Ul_list.classList.remove('Active_Hight')
    })
})

// Scrool
document.addEventListener('scroll' , ()=> {
    if(window.scrollY >= 600) {
        Up.style.right = '30px'
    }
    else {
        Up.style.right = '-60px'
    }
})

Up.addEventListener('click' ,()=> {
    window.scrollTo ({
        top : 0,
        behavior : "smooth"
    })
})