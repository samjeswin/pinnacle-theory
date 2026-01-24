/* ============================================
   PINNACLE THEORY - JavaScript Functionality
   ============================================ */

// ========== Preloader ==========
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 500);
    }
});

// ========== Mobile Menu Toggle ==========
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
    });
});

// ========== Active Navigation Link ==========
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ========== Animated Counters ==========
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(start));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+';
    }
    return num.toLocaleString();
}

// Intersection Observer for counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const counter = entry.target.querySelector('.counter-number');
            const target = parseInt(counter.getAttribute('data-target'));
            animateCounter(counter, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-card').forEach(card => {
    counterObserver.observe(card);
});

// ========== Scroll Animations ==========
const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('.feature-card, .service-card, .process-step-content, .testimonial-card').forEach(el => {
    scrollObserver.observe(el);
});

// ========== EMI Calculator ==========
const emiForm = document.getElementById('emiForm');
if (emiForm) {
    emiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateEMI();
    });

    // Real-time calculation on input change
    const inputs = emiForm.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('input', calculateEMI);
    });
}

function calculateEMI() {
    const principal = parseFloat(document.getElementById('loanAmount').value) || 0;
    const rate = parseFloat(document.getElementById('interestRate').value) || 0;
    const tenure = parseFloat(document.getElementById('loanTenure').value) || 0;

    if (principal <= 0 || rate <= 0 || tenure <= 0) {
        return;
    }

    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;

    // EMI Calculation: [P x R x (1+R)^N] / [(1+R)^N - 1]
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);

    const totalAmount = emi * months;
    const totalInterest = totalAmount - principal;

    // Display results
    const resultDiv = document.querySelector('.calculator-result');
    if (resultDiv) {
        resultDiv.classList.add('show');
        document.getElementById('monthlyEmi').textContent = '₹' + emi.toFixed(2);
        document.getElementById('totalAmount').textContent = '₹' + totalAmount.toFixed(2);
        document.getElementById('totalInterest').textContent = '₹' + totalInterest.toFixed(2);
    }
}

// ========== Testimonials Slider ==========
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelectorAll('.testimonial-dot');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
if (testimonials.length > 0) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// ========== Partner Banks Carousel ==========
const partnersCarousel = document.querySelector('.partners-carousel');
if (partnersCarousel) {
    let scrollPosition = 0;
    const scrollSpeed = 1;

    function autoScroll() {
        scrollPosition += scrollSpeed;
        partnersCarousel.scrollLeft = scrollPosition;

        if (scrollPosition >= partnersCarousel.scrollWidth - partnersCarousel.clientWidth) {
            scrollPosition = 0;
        }
    }

    // Pause on hover
    partnersCarousel.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    partnersCarousel.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(autoScroll, 20);
    });

    let carouselInterval = setInterval(autoScroll, 20);
}

// ========== Contact Form Submission ==========
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            message: document.getElementById('message').value
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Using EmailJS (free service)
            // Note: User needs to set up EmailJS account and add their service ID, template ID, and public key
            // For now, using FormSubmit as fallback
            
            // Option 1: FormSubmit (no setup required)
            const response = await fetch('https://formsubmit.co/ajax/samjeswin9821@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    location: formData.location,
                    message: formData.message,
                    _subject: 'New Contact Form Submission - Pinnacle Theory'
                })
            });

            if (response.ok) {
                showFormMessage('success', 'Thank you! Your message has been sent successfully. We will get back to you soon.');
                contactForm.reset();
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            console.error('Error:', error);
            showFormMessage('error', 'Sorry, there was an error sending your message. Please try again or contact us directly.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    });
}

function showFormMessage(type, message) {
    const messageDiv = document.querySelector('.form-message');
    if (messageDiv) {
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.display = 'block';

        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Hide after 5 seconds
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}

// ========== Smooth Scroll for Anchor Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== Sticky Header on Scroll ==========
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 31, 95, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 31, 95, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========== Number Input Formatting ==========
const numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove any non-numeric characters except decimal point
        this.value = this.value.replace(/[^0-9.]/g, '');
    });
});

// ========== Phone Number Formatting ==========
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove any non-numeric characters
        this.value = this.value.replace(/\D/g, '');
        
        // Format as Indian phone number (optional)
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });
});

// ========== Initialize on DOM Load ==========
document.addEventListener('DOMContentLoaded', () => {
    // Set initial testimonial
    if (testimonials.length > 0) {
        showTestimonial(0);
    }

    // Add fade-in animation to elements on load
    const animatedElements = document.querySelectorAll('.feature-card, .service-card, .counter-card');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});

// ========== WhatsApp Integration ==========
function openWhatsApp() {
    const phoneNumber = '918124506001'; // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello, I am interested in your financial services.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
}

// ========== Call Integration ==========
function makeCall() {
    const phoneNumber = '+918124506001'; // Replace with actual phone number
    window.location.href = `tel:${phoneNumber}`;
}

// Add event listeners for sticky CTA buttons
const whatsappBtn = document.querySelector('.sticky-btn.whatsapp');
const callBtn = document.querySelector('.sticky-btn.call');

if (whatsappBtn) {
    whatsappBtn.addEventListener('click', openWhatsApp);
}

if (callBtn) {
    callBtn.addEventListener('click', makeCall);
}

// ========== Form Validation ==========
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#e0e0e0';
        }

        // Email validation
        if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                isValid = false;
                input.style.borderColor = '#dc3545';
            }
        }
    });

    return isValid;
}

// Add validation to contact form
if (contactForm) {
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = '#dc3545';
            } else {
                this.style.borderColor = '#e0e0e0';
            }
        });
    });
}

// ========== Lazy Loading for Images ==========
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}


