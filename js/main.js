document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.getElementById('header-contact-menu-button');
    const header = document.querySelector('.header');
    const headerMenuButtonText = document.querySelector('.header-contact-menu-button .header-contact-button-text');
    const introContainer = document.querySelector('.intro-container');
    const body = document.querySelector('.body');
    const headerInfo = document.querySelector('.header-info');
    const headerMenu = document.querySelector('.header-menu');
  
  
    burgerBtn.addEventListener('click', () => {
        if (header.classList.toggle('open')) {
            headerMenuButtonText.textContent = 'Close menu'
            introContainer.style.background = "var(--full-background-color)";
            body.style.background = "var(--white-color)";
            headerInfo.style.display = "flex";
            headerMenu.style.marginLeft = "3vw";
        } else {
            headerMenuButtonText.textContent = 'Menu';
            introContainer.style.background = "var(--white-color)";
            body.style.background = "var(--full-background-color)";
            headerInfo.style.display = "none";
            headerMenu.style.marginLeft = "0";
        };
    })

    window.addEventListener('click', (e) => {
        if (!header.contains(e.target) && !burgerBtn.contains(e.target)) {
            header.classList.remove('open');
            headerMenuButtonText.textContent = 'Menu';
            introContainer.style.background = "var(--white-color)";
            body.style.background = "var(--full-background-color)";
            headerInfo.style.display = "none";
            headerMenu.style.marginLeft = "3vw";
        }
    });
})