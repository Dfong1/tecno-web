const facebook_icon = document.getElementById('facebook-icon');
const instagram_icon = document.getElementById('instagram-icon');
const email_icon = document.getElementById('email-icon');
const menu = document.getElementById('burger-menu');
const rightItems = document.querySelector('.nav-mobile .right-items');
const containerAll = document.querySelector('.container__all');

document.addEventListener('DOMContentLoaded', function() {
    facebook_icon.addEventListener('click', function() {
        window.open('https://www.facebook.com/profile.php?id=61559499794684', '_blank')
    })

    instagram_icon.addEventListener('click', function() {
        window.open('https://www.instagram.com/tecnodev12/', '_blank')
    })
    email_icon.addEventListener('click', function() {
        window.open('mailto:tecnodev12@gmail.com', '_self')
    })
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

    // This is "probably" IE9 compatible but will need some fallbacks for IE8
// - (event listeners, forEach loop)

// wait for the entire page to finish loading
window.addEventListener('load', function() {
	
	// setTimeout to simulate the delay from a real page load
	setTimeout(lazyLoad, 1000);
	
});

function lazyLoad() {
	var card_images = document.querySelectorAll('.card-image');
	
	// loop over each card image
	card_images.forEach(function(card_image) {
		var image_url = card_image.getAttribute('data-image-full');
		var content_image = card_image.querySelector('img');
		
		// change the src of the content image to load the new high res photo
		content_image.src = image_url;
		
		// listen for load event when the new photo is finished loading
		content_image.addEventListener('load', function() {
			// swap out the visible background image with the new fully downloaded photo
			card_image.style.backgroundImage = 'url(' + image_url + ')';
			// add a class to remove the blur filter to smoothly transition the image change
			card_image.className = card_image.className + ' is-loaded';
		});
		
	});
	
}
});
