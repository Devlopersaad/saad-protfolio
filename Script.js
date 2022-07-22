let menu = Document.querySelector('#menu-icon');
let navlist = Document.querySelector('.navlist');

menu.oneclick =() => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onescroll =() => {
    menu.classList.remove('bx-x');
    navlist.classList.remove ('active');
};

const sr = ScrollReveal({
    ditance: '40px',
    duration: 2600,
    reset:true
})

sr.reveal('.home-text', {delay:300, origin:'left'})
sr.reveal('.about, .services, .portfolio,.blog,.contact,.copyright', {delay:300, origin:'bottom'})