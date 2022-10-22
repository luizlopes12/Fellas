let theme = localStorage.getItem('theme')
document.body.classList.toggle(theme?theme:'light__theme')
const mobileNavBar = () =>{
    document.querySelector('.mobile__menu').classList.toggle('open')
    document.querySelector('.nav__links').classList.toggle('open')
    if(window.innerWidth < 1000){
        document.querySelector('.navbar__section').classList.toggle('navbar__fixed')
        document.body.classList.toggle('stop__scroll')
    }
}
const switchTheme = () =>{
    if(window.innerWidth < 1000){
        mobileNavBar()
    }
    document.body.classList.toggle('light__theme')
    document.body.classList.toggle('dark__theme')
    localStorage.setItem('theme', document.body.classList)

}
if(window.innerWidth < 800){
    document.querySelectorAll('.projects__section .row.cards .col-4.col-sm').classList.remove('col-sm')
}

let projectsSlidePage = 1;
const projectsSlide = (num) =>{
    let cards = document.querySelectorAll('.projects__section .row.cards .col-sm')
    let cardsWrapper = document.querySelector('.projects__section .row .card__wrapper')
    if(num>1 && projectsSlidePage <= 1){
        projectsSlidePage++
        cards[projectsSlidePage-1].classList.toggle('active')
        cards[projectsSlidePage].classList.toggle('active')
        if(projectsSlidePage == 1){
            cardsWrapper.style.transform = `initial`
        }else{
            cardsWrapper.style.transform = `translateX(-${(projectsSlidePage-1)*30}%)`
        }
    }
    if(num<1 && projectsSlidePage >= 1){
        projectsSlidePage--
        cards[projectsSlidePage+1].classList.toggle('active')
        cards[projectsSlidePage].classList.toggle('active')
        if(projectsSlidePage == 1){
            cardsWrapper.style.transform = `initial`
        }else{
            cardsWrapper.style.transform = `translateX(${(projectsSlidePage+1)*30}%)`
        }
    }
    if(num==1){
        cards[projectsSlidePage].classList.toggle('active')
    }

}
projectsSlide(1)
