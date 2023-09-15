document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');

    // Function to update the active link based on scroll position
    function updateActiveLink() {
        const scrollY = window.scrollY;

        // Loop through sections to find the active one
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                const targetId = section.getAttribute('id');
                // Remove active class from all links
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                // Add active class to the corresponding link
                navLinks.forEach(navLink => {
                    if (navLink.getAttribute('href').substring(1) === targetId) {
                        navLink.classList.add('active');
                    }
                });
            }
        });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Remove active class from all links
            navLinks.forEach(navLink => {
                navLink.classList.remove('active');
            });
			// Add active class to the clicked link
            this.classList.add('active');
        });
    });

    // Update active link on page load and scroll
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
                    otherLink.style.color = 'white'; // Change this to your desired color
                }
            });
        });
    });


	
});

//1////////////////////////////////////////////
function displayNextImage() {
  x = (x === images.length - 1) ? 0 : x + 1;
  var imgElement = document.getElementById("img");
  imgElement.style.opacity = 0; // Fade out the image
  setTimeout(function() {
    imgElement.src = images[x];
    imgElement.style.opacity = 1; // Fade in the new image
  }, 500); // Wait for the fade-out transition to complete (0.5 seconds)
}

function displayPreviousImage() {
  x = (x <= 0) ? images.length - 1 : x - 1;
  var imgElement = document.getElementById("img");
  imgElement.style.opacity = 0; // Fade out the image
  setTimeout(function() {
    imgElement.src = images[x];
    imgElement.style.opacity = 1; // Fade in the new image
  }, 500); // Wait for the fade-out transition to complete (0.5 seconds)
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

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
