document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    function updateActiveLink() {
        const scrollY = window.scrollY;

        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                const targetId = section.getAttribute('id');
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                navLinks.forEach(navLink => {
                    if (navLink.getAttribute('href').substring(1) === targetId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    window.addEventListener('load', updateActiveLink);
    window.addEventListener('scroll', updateActiveLink);

    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            links.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.color = 'gray';
                }
            });
        });

        link.addEventListener('mouseleave', () => {
            links.forEach(otherLink => {
                if (otherLink !== link) {
                    otherLink.style.color = 'white';
                }
            });
        });
    });
});

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    var imgElement = document.getElementById("img");
    imgElement.style.opacity = 0;
    setTimeout(function () {
        imgElement.src = images[x];
        imgElement.style.opacity = 1;
    }, 500);
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    var imgElement = document.getElementById("img");
    imgElement.style.opacity = 0;
    setTimeout(function () {
        imgElement.src = images[x];
        imgElement.style.opacity = 1;
    }, 500);
}

function startTimer() {
    setInterval(displayNextImage, 3000);
}

var images = [];
var x = -1;
images[0] = "Autoskola/profile.png";
images[1] = "Autoskola/pay.png";
images[2] = "Autoskola/register.png";
images[3] = "Autoskola/theory.png";
images[4] = "Autoskola/mobile11.png";
images[5] = "Autoskola/login22.png";
images[6] = "Autoskola/login.png";

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
