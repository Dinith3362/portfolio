// Reveal elements on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Simple scroll reveal implementation
    const style = document.createElement('style');
    style.textContent = `
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(style);
});

// Smooth Navbar background change
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1rem 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.8)';
    } else {
        navbar.style.padding = '1.5rem 0';
        navbar.style.background = 'transparent';
    }
});

// Typing Effect for Hero Section
const typingText = document.getElementById('typing-text');
const roles = ['Embedded Engineer', 'Business Analyst', 'IoT Engineer', 'Quality Assurance', 'Project Manager'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 50;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at the end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typingText) {
        setTimeout(type, 1000);
    }

    // Flip Card Logic
    const flipButtons = document.querySelectorAll('.btn-flip');
    const backButtons = document.querySelectorAll('.btn-back');

    flipButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.flip-card');
            card.classList.add('flipped');
        });
    });

    backButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.flip-card');
            card.classList.remove('flipped');
        });
    });
    // Hero Photo Scan Animation
    const heroWrapper = document.querySelector('.scan-effect');
    const heroPhoto = document.getElementById('hero-photo');
    const bitsContainer = document.querySelector('.scan-bits');

    if (heroWrapper && heroPhoto) {
        // Trigger scan after a brief delay
        setTimeout(() => {
            heroWrapper.classList.add('active');

            // Create falling bit particles
            const createBits = setInterval(() => {
                const bit = document.createElement('div');
                bit.className = 'bit';
                bit.style.left = Math.random() * 100 + '%';
                bit.style.top = Math.random() * 100 + '%';
                bit.style.animation = `bitFall ${Math.random() * 0.5 + 0.5}s linear forwards`;
                bitsContainer.appendChild(bit);

                // Cleanup bits
                setTimeout(() => bit.remove(), 1000);
            }, 50);

            // After scan completes (3s), show full image
            setTimeout(() => {
                clearInterval(createBits);
                heroPhoto.classList.add('scanned');
            }, 3000);
        }, 1500);
    }
    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('form-submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Set loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';
            formStatus.className = 'form-status';
            formStatus.innerHTML = '';

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.getAttribute('action'), {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.className = 'form-status success';
                    formStatus.innerHTML = 'Message sent successfully! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.prototype.hasOwnProperty.call(data, 'errors')) {
                        formStatus.innerHTML = data['errors'].map(error => error['message']).join(', ');
                    } else {
                        formStatus.innerHTML = 'Oops! There was a problem submitting your form';
                    }
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                formStatus.className = 'form-status error';
                formStatus.innerHTML = 'Oops! There was a problem submitting your form';
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message';
            }
        });
    }
});
