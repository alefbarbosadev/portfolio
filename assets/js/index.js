//scroll
window.addEventListener('scroll', function(){
    var menu = document.querySelector('.navbar');
    menu.classList.toggle('sticky', window.scrollY > 0);
  })

// menu-response
var ul = document.querySelector('.menu');
var menuBtn = document.querySelector('.btn-menu');

function menuShow() {
    if (ul.classList.contains('active')) {
        ul.classList.remove('active');
    } else {
        ul.classList.add('active');
    }
}

