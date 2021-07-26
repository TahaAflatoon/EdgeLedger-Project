/*JQuery*/
$.noConflict()
jQuery(document).ready(function($) {
    //smooth scroll
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

/*JavaScript*/
//Sticky menu background
window.addEventListener('scroll', function() {
    if (window.scrollY > 51) {
        document.querySelector('.header').style.opacity = 0.9;
    } else {
        document.querySelector('.header').style.opacity = 1;
    }
});

//Scroll indicator
//When the user scrolls the page, execute myFunction
function indicator() {
    window.onscroll = function() {ScrollFunction()};
    function ScrollFunction() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("ScrollBar").style.width = scrolled + "%";
    }
}
indicator()

/*Modal*/
function Modal() {
    // Get the modal
    let modal = document.getElementById('whomodal');
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    let img = document.getElementById('whoimage');
    let modalImg = document.getElementById("img01");
    let captionText = document.getElementById("caption");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
}