document.getElementById('whatsapp-link').href = 'YOUR_WHATSAPP_GROUP_LINK_HERE';
document.getElementById('whatsapp-link-footer').href = 'YOUR_WHATSAPP_GROUP_LINK_HERE';

const slideContainer = document.querySelector('.slide-container');
let slideIndex = 0;

function showNextSlide() {
    slideIndex++;
    if (slideIndex >= slideContainer.children.length) {
        slideIndex = 0;
    }
    slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

setInterval(showNextSlide, 3000);
