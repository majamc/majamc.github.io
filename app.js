// GSAP and ScrollTrigger for animations
gsap.registerPlugin(ScrollTrigger);

// Hero section fade-in
gsap.from(".hero-content h1", {
    opacity: 0,
    y: -50,
    duration: 1.5,
    ease: "power3.out"
});

gsap.from(".hero-content p", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out"
});

// Parallax scroll effect
gsap.from(".parallax h2", {
    scrollTrigger: {
        trigger: ".parallax",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true
    },
    y: 100,
    opacity: 0
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".why-i-love-you li", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2, // Time between animations for each list item
    scrollTrigger: {
        trigger: ".why-i-love-you", // Animation will start when the section comes into view
        start: "top 80%", // Start animation when 80% of the section is visible
        toggleActions: "play none none none", // Only play once when triggered
    }
});

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item.querySelector('img'), { scale: 1.1, duration: 0.5, ease: 'power1.out' });
        gsap.to(item.querySelector('.overlay'), { opacity: 1, duration: 0.5, ease: 'power1.out' });
        gsap.to(item.querySelector('.view-text'), { opacity: 1, y: 0, duration: 0.5, ease: 'power1.out' });
    });

    item.addEventListener('mouseleave', () => {
        gsap.to(item.querySelector('img'), { scale: 1, duration: 0.5, ease: 'power1.out' });
        gsap.to(item.querySelector('.overlay'), { opacity: 0, duration: 0.5, ease: 'power1.out' });
        gsap.to(item.querySelector('.view-text'), { opacity: 0, y: 20, duration: 0.5, ease: 'power1.out' });
    });
});



let currentIndex = 0;
const slidesToShow = 3; // Number of slides you want to show at once
const galleryGrid = document.querySelector('.gallery-grid');
const totalSlides = galleryGrid.children.length;

function moveSlide(direction) {
    const maxIndex = totalSlides - slidesToShow;
    currentIndex = Math.max(0, Math.min(currentIndex + direction, maxIndex));
    
    galleryGrid.style.transform = `translateX(-${(currentIndex * 100) / slidesToShow}%)`;
}

//Time
function startCounter() {
    const startDate = new Date('2020-03-04T00:00:00'); // Start date
    const updateCounter = () => {
        const now = new Date();
        const difference = now - startDate;

        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('days').textContent = String(days).padStart(2, '0');
    };

    updateCounter(); // Initial call to display immediately
    setInterval(updateCounter, 1000); // Update every second
}

// Start the counter when the page loads
window.onload = startCounter;