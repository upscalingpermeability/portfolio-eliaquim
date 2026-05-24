const btn = document.getElementById("darkMode");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

btn.onclick = () => {
    document.body.classList.toggle("light-mode");
    const isLight = document.body.classList.contains("light-mode");
    moonIcon.style.display = isLight ? "none" : "block";
    sunIcon.style.display = isLight ? "block" : "none";
};

// Carousel Logic
const projectItems = document.querySelectorAll('.project-item');
const prevBtn = document.getElementById('prevProject');
const nextBtn = document.getElementById('nextProject');
let currentProjectIndex = 0;

function showProject(index) {
    projectItems.forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex > 0) ? currentProjectIndex - 1 : projectItems.length - 1;
        showProject(currentProjectIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentProjectIndex = (currentProjectIndex < projectItems.length - 1) ? currentProjectIndex + 1 : 0;
        showProject(currentProjectIndex);
    });
}

// Blog Carousel Logic
const blogCarousel = document.getElementById('blogCarousel');
const prevBlogBtn = document.getElementById('prevBlog');
const nextBlogBtn = document.getElementById('nextBlog');

if (blogCarousel && prevBlogBtn && nextBlogBtn) {
    prevBlogBtn.addEventListener('click', () => {
        // Scroll left by roughly one card width
        blogCarousel.scrollBy({ left: -350, behavior: 'smooth' });
    });

    nextBlogBtn.addEventListener('click', () => {
        // Scroll right by roughly one card width
        blogCarousel.scrollBy({ left: 350, behavior: 'smooth' });
    });
}

// Scroll to Top Logic
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}