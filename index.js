const navLinkELs = document.querySelectorAll('.nav-link');
const windowPathname = window.location.pathname;

navLinkELs.forEach(navLinkEL =>{
    const navLinkPathname = new URL(navLinkEl.href).pathname;

    if((windowPathname === navLinkPathname) || (windowPathname === '/index.html' && navLinkPathname === '/') ){
        navLinkEL.classList.add('active');
    }
});
