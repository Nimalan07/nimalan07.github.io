document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.sticky-nav a');
    const sections = document.querySelectorAll('section');
    const scrollTopBtn = document.getElementById('scrollToTop');
    const viewPortfolioBtn = document.getElementById('viewPortfolioBtn');
    const contactForm = document.getElementById('contactForm');

    // Active Nav Link on Scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${entry.target.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Scroll to Top Button
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // "View Portfolio" Button Scroll
    viewPortfolioBtn.addEventListener('click', () => {
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    });

    // Smooth Scroll for Nav Links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form (Mock)
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Form submitted!');

        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Message Sent!';
        submitButton.disabled = true;

        setTimeout(() => {
            submitButton.textContent = 'Send Message';
            submitButton.disabled = false;
            contactForm.reset();
        }, 3000);
    });
});
