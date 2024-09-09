function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Event listener nav links
document.getElementById('home-link').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#home');
});

document.getElementById('menu-link').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#menu');
});

document.getElementById('about-link').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#about');
});

document.getElementById('contact-link').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#contact');
});

// Event listener for the "Explore Menu" button
document.getElementById('explore-menu-btn').addEventListener('click', function(e) {
    e.preventDefault();
    smoothScroll('#menu');
});
