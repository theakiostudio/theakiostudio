// Splash screen
const splash = document.getElementById('splash');
if (splash) {
  document.body.classList.add('splash-visible');
  const hideSplash = () => {
    splash.classList.add('hidden');
    document.body.classList.remove('splash-visible');
    setTimeout(() => splash.remove(), 700);
  };
  setTimeout(hideSplash, 2200);
}

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMain = document.querySelector('.nav-main');

if (navToggle && navMain) {
  navToggle.addEventListener('click', () => {
    navMain.classList.toggle('active');
    navToggle.classList.toggle('active');
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMain?.classList.remove('active');
    navToggle?.classList.remove('active');
  });
});

// Smooth scroll for anchor links (backup for older browsers)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll reveal — editorial fade-in
const revealSections = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
  revealSections.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight * 0.85;
    if (inView) el.classList.add('visible');
  });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
