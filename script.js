const facebook_icon = document.getElementById('facebook-icon');
const instagram_icon = document.getElementById('instagram-icon');
const email_icon = document.getElementById('email-icon');
const menu = document.getElementById('burger-menu');
const rightItems = document.querySelector('.nav-mobile .right-items');
const containerAll = document.querySelector('.container__all');

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burger-menu');
    const rightItems = document.querySelector('.nav-mobile .right-items');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    document.body.appendChild(overlay);

    burgerMenu.addEventListener('click', function() {
        rightItems.classList.toggle('show');
        overlay.style.display = rightItems.classList.contains('show') ? 'block' : 'none';
    });

    overlay.addEventListener('click', function() {
        rightItems.classList.remove('show');
        overlay.style.display = 'none';
    });
});