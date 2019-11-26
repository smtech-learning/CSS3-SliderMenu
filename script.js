const openButton = document.querySelector('.open-nav');
const closeButton = document.querySelector('.close-nav');
const slidermenu = document.querySelector('.nav');

openButton.addEventListener('click', ()=> {
    
    slidermenu.classList.add('slidermenu-open');

});


closeButton.addEventListener('click', ()=> {
    slidermenu.classList.remove('slidermenu-open');
});

