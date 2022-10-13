let theme = localStorage.getItem('theme')? localStorage.getItem('theme'):'light__theme'
document.body.classList.toggle(theme)
const mobileNavBar = () =>{
    document.querySelector('.mobile__menu').classList.toggle('open')
    document.querySelector('.nav__links').classList.toggle('open')
    if(window.innerWidth < 1000){
        document.querySelector('.navbar__section').classList.toggle('navbar__fixed')
        document.body.classList.toggle('stop__scroll')
    }
}
const switchTheme = () =>{
    document.body.classList.toggle('light__theme')
    document.body.classList.toggle('dark__theme')
    localStorage.setItem('theme', document.body.classList)
}