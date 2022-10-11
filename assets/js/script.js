let theme = localStorage.getItem('theme')
if(theme.length > 0){
    document.body.classList.add(theme)
}else{
    document.body.classList.add('light__theme')
}
const mobileNavBar = () =>{
    document.querySelector('.mobile__menu').classList.toggle('open')
    document.querySelector('.nav__links').classList.toggle('open')
    document.querySelector('.navbar__section').classList.toggle('navbar__fixed')
}
const switchTheme = () =>{
    document.body.classList.toggle('light__theme')
    document.body.classList.toggle('dark__theme')
    localStorage.setItem('theme', document.body.classList)
}