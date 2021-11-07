// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    // Smooth scroll
    $('.nav-items a, .read-button').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
                },800
            );
        }
});
})

// JavaScript
// Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.9;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

// Scroll indicator
// When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.querySelector('#ScrollBar').style.width = scrolled + '%';
    }
}
indicator()

// Modal
function Modal() {
    // Get the modal
    const modal = document.querySelector('#whomodal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    const img = document.querySelector('#whoimage');
    const modalImg = document.querySelector('#img01');
    const captionText = document.querySelector('#caption');
    img.onclick = function(){
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

// Get the <span> element that closes the modal
const span = document.querySelectorAll('.close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}
}