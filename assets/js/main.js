document.addEventListener('DOMContentLoaded', () => {
    // 0. Global Header Injection
    const renderHeader = () => {
        const headerHTML = `
        <div class="container nav-container">
            <a href="index.html" class="logo">Story<span>Tail</span></a>

            <ul class="nav-links">
                <li><a href="index.html" class="nav-link" data-page="index.html">Home</a></li>
                <li><a href="home-2.html" class="nav-link" data-page="home-2.html">Home 2</a></li>
                <li><a href="about.html" class="nav-link" data-page="about.html">About</a></li>
                <li><a href="services.html" class="nav-link" data-page="services.html">Books</a></li>
                <li><a href="blog.html" class="nav-link" data-page="blog.html">Blog</a></li>
                <li><a href="pricing.html" class="nav-link" data-page="pricing.html">Visits</a></li>
                <li><a href="contact.html" class="nav-link" data-page="contact.html">Contact</a></li>
                <li><a href="login.html" class="nav-link" data-page="login.html">Login</a></li>
                <li><button class="theme-toggle"><i class="ri-moon-line"></i></button></li>
            </ul>

            <button class="menu-btn" aria-label="Toggle Menu">
                <i class="ri-menu-3-line"></i>
            </button>
        </div>
        `;

        const mobileMenuHTML = `
        <div class="mobile-menu-overlay"></div>
        <div class="nav-links-mobile">
            <button class="close-menu"><i class="ri-close-line"></i></button>
            <a href="index.html" class="mobile-nav-link" data-page="index.html">Home</a>
            <a href="home-2.html" class="mobile-nav-link" data-page="home-2.html">Home 2</a>
            <a href="about.html" class="mobile-nav-link" data-page="about.html">About</a>
            <a href="services.html" class="mobile-nav-link" data-page="services.html">Books</a>
            <a href="blog.html" class="mobile-nav-link" data-page="blog.html">Blog</a>
            <a href="pricing.html" class="mobile-nav-link" data-page="pricing.html">Visits</a>
            <a href="contact.html" class="mobile-nav-link" data-page="contact.html">Contact</a>
            <a href="login.html" class="mobile-nav-link" data-page="login.html">Login</a>
        </div>
        `;

        const isLoginPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html');
        const nav = document.querySelector('.navbar');
        if (nav && !isLoginPage) {
            nav.innerHTML = headerHTML;
            // Inject mobile menu logic too
            if (!document.querySelector('.nav-links-mobile')) {
                nav.insertAdjacentHTML('afterend', mobileMenuHTML);
            }
        } else if (nav) {
            nav.style.display = 'none'; // Hide placeholder if present
        }

        // Set Active class
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll(`[data-page="${currentPath}"]`).forEach(link => {
            link.classList.add('active');
        });
    };

    const renderFooter = () => {
        const footerHTML = `
        <!-- Premium Call to Adventure Section -->
        <section class="section-padding premium-cta-section" style="background: var(--bg-white); border-top: 1px solid var(--border); padding-bottom: 0;">
            <div class="container">
                <div class="premium-cta-card reveal">
                    <div class="cta-content">
                        <span class="hero-tag mb-1">✨ Write Your Story</span>
                        <h2 class="mb-2">Ready to Start Your Journey?</h2>
                        <p class="mb-3 mx-auto" style="max-width: 700px;">Explore a world where every page is a doorway to
                            adventure. From whimsical picture books to interactive digital stories, find your next favorite
                            bedtime companion today.</p>
                        <div class="flex-gap-sm justify-center mt-3">
                            <a href="services.html" class="btn btn-primary">Browse All Books <i
                                    class="ri-book-3-line"></i></a>
                            <a href="activity.html" class="btn btn-outline" style="border-color: white; color: white;">Free
                                Activities</a>
                        </div>
                    </div>
                    <!-- Floating Decorative Assets -->
                    <div class="cta-icon-float cta-book"><i class="ri-book-open-line"></i></div>
                    <div class="cta-icon-float cta-star"><i class="ri-star-smile-fill"></i></div>
                </div>
            </div>
        </section>

        <div class="container footer-grid mb-3 reveal" style="padding-top: 6rem; padding-bottom: 3rem;">
            <div class="footer-about">
                <a href="index.html" class="logo">Story<span>Tail</span></a>
                <p class="mt-1" style="color: var(--text-muted);">Empowering children to dream big and learn through the
                    power of imaginative storytelling.</p>
                <div class="social-links">
                    <a href="#" class="social-icon" aria-label="Facebook"><i class="ri-facebook-fill"></i></a>
                    <a href="#" class="social-icon" aria-label="Instagram"><i class="ri-instagram-line"></i></a>
                    <a href="#" class="social-icon" aria-label="Twitter"><i class="ri-twitter-fill"></i></a>
                </div>
            </div>
            <div>
                <h4>Explore</h4>
                <ul class="footer-links">
                    <li><a href="services.html">All Books</a></li>
                    <li><a href="about.html">Author Journey</a></li>
                    <li><a href="blog.html">Blog Posts</a></li>
                    <li><a href="activity.html">Activity Sheets</a></li>
                </ul>
            </div>
            <div>
                <h4>Support</h4>
                <ul class="footer-links">
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="faq.html">FAQ</a></li>
                    <li><a href="privacy.html">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <ul class="footer-links" style="color: var(--text-muted);">
                    <li><i class="ri-mail-line"></i> hello@storytail.com</li>
                    <li><i class="ri-map-pin-line"></i> 123 Dreamy Lane, Storyville</li>
                    <li><i class="ri-phone-line"></i> +1 234 567 890</li>
                </ul>
            </div>
        </div>
        <div class="container py-2 text-center"
            style="border-top: 1px solid var(--border); color: var(--text-muted); font-size: 0.85rem; padding: 2rem 0;">
            &copy; 2024 StoryTail by [Author Name]. All rights reserved.
        </div>
        `;

        const footer = document.querySelector('footer');
        const isLoginPage = window.location.pathname.includes('login.html') || window.location.pathname.includes('register.html');

        if (footer && !isLoginPage) {
            footer.innerHTML = footerHTML;
            footer.style.display = 'block'; // Ensure footer is visible
        }
    };

    renderHeader();
    renderFooter();

    // 1. Preloader
    const preloader = document.querySelector('#preloader');
    if (preloader) {
        preloader.style.display = 'none';
    }

    // 2. Sticky Navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // 3. Dark Mode Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;

    // Check local storage
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            updateThemeIcon(theme);
        });
    }

    function updateThemeIcon(theme) {
        const icon = themeToggle?.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'ri-sun-line' : 'ri-moon-line';
        }
    }

    // 4. Scroll Reveal (Intersection Observer)
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealItems = document.querySelectorAll('.reveal, .premium-reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealItems.forEach(item => {
        // Ensure items are visible by default
        if (!item.classList.contains('premium-reveal')) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
            item.style.transition = "all 0.8s ease-out";
        }
        revealObserver.observe(item);
    });

    // Custom Scroll Reveal class logic
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.reveal, .premium-reveal').forEach(el => {
            const pos = el.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (pos < windowHeight * 0.85) {
                el.classList.add('active');
                if (!el.classList.contains('premium-reveal')) {
                    el.style.opacity = "1";
                    el.style.transform = "translateY(0)";
                }
            }
        });
    });

    // 5. Book Filter (For services.html)
    const filterBtns = document.querySelectorAll('.filter-btn');
    const bookItems = document.querySelectorAll('.book-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Active class
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                bookItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 400);
                    }
                });
            });
        });
    }

    // 6. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.nav-links-mobile');
    const closeBtn = document.querySelector('.close-menu');
    const overlay = document.querySelector('.mobile-menu-overlay');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }

    // 7. Form Validation (Generic)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            if (form.getAttribute('action') === '#') {
                e.preventDefault();
                alert('Thank you! This is a placeholder for form submission.');
                form.reset();
            }
        });
    });

    // 8. Countdown (For coming-soon.html)
    const countdown = document.querySelector('.countdown');
    if (countdown) {
        let timeLeft = 30 * 24 * 60 * 60; // 30 days
        const timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                return;
            }
            timeLeft--;
            const days = Math.floor(timeLeft / (24 * 3600));
            const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            const daysEl = document.querySelector('#days');
            const hoursEl = document.querySelector('#hours');
            const minsEl = document.querySelector('#mins');
            const secsEl = document.querySelector('#secs');

            if (daysEl) daysEl.innerText = days.toString().padStart(2, '0');
            if (hoursEl) hoursEl.innerText = hours.toString().padStart(2, '0');
            if (minsEl) minsEl.innerText = minutes.toString().padStart(2, '0');
            if (secsEl) secsEl.innerText = seconds.toString().padStart(2, '0');
        }, 1000);
    }
});
