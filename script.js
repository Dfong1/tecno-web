const facebook_icon = document.getElementById('facebook-icon');
const instagram_icon = document.getElementById('instagram-icon');
const email_icon = document.getElementById('email-icon');
const menu = document.getElementById('burger-menu');
const rightItems = document.querySelector('.nav-mobile .right-items');
const containerAll = document.querySelector('.container__all');

menu.addEventListener('click', function() {
    console.log(rightItems)
    rightItems.classList.toggle('show');
});

facebook_icon.addEventListener('click', function() {
    window.open('https://www.facebook.com/profile.php?id=61559499794684', '_blank')
})

instagram_icon.addEventListener('click', function() {
    window.open('https://www.instagram.com/tecnodev12/', '_blank')
})
email_icon.addEventListener('click', function() {
    window.open('mailto:tecnodev12@gmail.com', '_self')
})